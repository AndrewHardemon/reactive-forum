import React from "react";
import reactImg from "../../assets/react.svg";
import "./index.css";

export default function Header({setPage}: any) {
  return (
    <header className="header">
      <h1><img src={reactImg}/></h1>
      <nav>
        <ul>
          <li onClick={() => setPage("Home")}>Home</li>
          <li onClick={() => setPage("Forums")}>Forums</li>
          <li onClick={() => setPage("Members")}>Members</li>
          <li onClick={() => setPage("Log In")}>Log In</li>
          <li onClick={() => setPage("Sign Up")}>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}