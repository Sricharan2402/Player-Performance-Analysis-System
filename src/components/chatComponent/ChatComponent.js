import React, { useState, useEffect, useRef } from "react";
import { db, serverTimestamp } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../../auth/Auth";

import Navbar from "../Navbar";

export default function ManagerChat() {
  const { currentUser, userDetails, userType } = useAuth();
  const otherType = userType == "manager" ? "players" : "manager";
  const playersRef = db.collection(otherType);

  const [query, setQuery] = useState({
    senderQuery: null,
    receiverQuery: null,
  });
  const messagesRef = db.collection("messages");

  const [players] = useCollectionData(playersRef, { idField: "id" });
  const [sentMessages] = useCollectionData(query.sendQuery, { idField: "id" });

  const [recvdMessages] = useCollectionData(query.receiverQuery, {
    idField: "id",
  });
  const [messages, setMessages] = useState(null);
  const [receiver, setReceiver] = useState();
  const [text, setText] = useState("");

  const selectThis = (player) => {
    setReceiver(player);
  };

  useEffect(() => {
    if (receiver) {
      setMessages();
      setQuery({
        sendQuery: messagesRef
          .where("senderID", "==", currentUser.uid)
          .where("receiverID", "==", receiver.id),
        receiverQuery: messagesRef
          .where("receiverID", "==", currentUser.uid)
          .where("senderID", "==", receiver.id),
      });
    }
  }, [receiver]);

  useEffect(() => {
    if (sentMessages && recvdMessages) {
      setMessages(
        sentMessages.concat(recvdMessages).sort((x, y) => {
          return x.createdAt - y.createdAt;
        })
      );
    }
  }, [sentMessages, recvdMessages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: text,
      createdAt: serverTimestamp,
      senderID: currentUser.uid,
      receiverID: receiver.id,
    });
    setText("");
  };

  return (
    <>
      {players && userDetails && currentUser && (
        <>
          <Navbar />
          <div className="msg-app-container">
            <div className="player-cols-container h-100">
              {players.map((player) => (
                <PlayerContainer
                  key={player.id}
                  player={player}
                  onClick={() => {
                    selectThis(player);
                  }}
                />
              ))}
            </div>
            <div className="message-board-container h-100">
              {receiver && messages && (
                <MessageContainer
                  messages={messages}
                  sendMessage={sendMessage}
                  text={text}
                  setText={setText}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function PlayerContainer(props) {
  //const playerId = props.key;
  const { Name, photoURL } = props.player;
  return (
    <div className="d-flex player-names-container" onClick={props.onClick}>
      <img className="dp" src={photoURL} />
      <h2 className="player-name">{Name}</h2>
    </div>
  );
}

function MessageContainer({ messages, sendMessage, text, setText }) {
  return (
    <div className="Chat">
      <section>
        <main className="message-body">
          {messages &&
            messages.map((msg) => <Message key={msg.id} message={msg} />)}
        </main>
      </section>
      <form className="message-form" onSubmit={sendMessage}>
        <input
          placeholder="Type something here....."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">💬</button>
      </form>
    </div>
  );
}

function Message(props) {
  const { currentUser } = useAuth();
  const { text, senderID } = props.message;

  const messageClass = senderID === currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}
