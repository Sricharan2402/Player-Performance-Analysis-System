import React, { useState } from "react";
import { db, serverTimestamp } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../auth/Auth";

export default function ChatMain() {
  const { currentUser, userDetails, userType } = useAuth();
  return (
    <div>
      <DisplayPlayers />
    </div>
  );
}

const DisplayPlayers = () => {};
