import React from "react";
import { useAuth } from "../auth/Auth";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const { userType, signout, userDetails } = useAuth();
  const history = useHistory();

  async function handleSignout() {
    //setError("");

    try {
      await signout();
      history.push("/signin");
    } catch {
      //setError("Failed to log out");
    }
  }
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <span className="brand-name">{`fútFicianado (${userType})`}</span>
      </a>
      <div className="nav-item dropdown ml-auto">
        <a
          className="nav-link"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
        >
          <img
            src={userDetails.photoURL}
            height={50}
            width={50}
            className="user-img"
          />
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Profile
          </a>
          <a className="dropdown-item" href="messenger">
            Messages
          </a>
          <div className="dropdown-divider" />
          <button
            className="dropdown-item"
            type="submit"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
