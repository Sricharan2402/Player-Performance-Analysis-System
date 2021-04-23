import React, { useState, useEffect, useRef } from "react";
import { db, serverTimestamp } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../../auth/Auth";

import Navbar from "../Navbar";

export default function ChatRoomComponent() {
  const { currentUser, userDetails } = useAuth();

  const messagesRef = db.collection("chatroom");
  const query = messagesRef.orderBy("createdAt").limit(50);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [text, setText] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: text,
      createdAt: serverTimestamp,
      senderID: currentUser.uid,
      senderName: userDetails.Name,
      photoURL: userDetails.photoURL,
    });
    setText("");
  };

  return (
    <>
      {userDetails && currentUser && (
        <>
          <Navbar />
          <div className="chat-app-container">
            <div className="chat-board-container h-100">
              {messages && (
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
        <button type="submit" disabled={!text}>
          💬
        </button>
      </form>
    </div>
  );
}

function Message(props) {
  const { currentUser } = useAuth();
  const { text, senderID, photoURL, senderName } = props.message;

  const messageClass = senderID === currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img className="dp-inchat" src={photoURL} />
        <p>
          <span className="name-cont">
            {messageClass == "sent" ? "You" : senderName}
          </span>
          <br />
          {text}
        </p>
      </div>
    </>
  );
}
