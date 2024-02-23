import React from "react";
import "./index.css";

export default function Header() {
  return (
    <div className="footer">
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" />
      </a>
      <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript logo" />
      </a>
    </div>
  );
}