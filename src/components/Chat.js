import React, { useState } from "react";
import { db, serverTimestamp } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../auth/Auth";

function Chat() {
  return (
    <div className="Chat">
      <header>
        <h1>⚛️⚽💬 FutFicianado Messenger</h1>
      </header>

      <section>
        <ChatRoom />
      </section>
    </div>
  );
}

function ChatRoom() {
  const { currentUser, userDetails } = useAuth();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = currentUser;
    const { photoURL } = userDetails;
    await messagesRef.add({
      text: formValue,
      createdAt: serverTimestamp,
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="type something here... "
        />

        <button type="submit" disabled={!formValue}>
          💬
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { currentUser } = useAuth();
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL /* || "https://api.adorable.io/avatars/23/abott@adorable.png"*/
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
