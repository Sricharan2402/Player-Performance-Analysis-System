import React /*, { useState }*/ from "react";
import { useAuth } from "../auth/Auth";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function HomePage() {
  //const [error, setError] = useState("");
  const { userDetails } = useAuth();

  return (
    <>
      {userDetails && (
        <>
          <Navbar />
          <Dashboard />
        </>
      )}
    </>
  );
}
