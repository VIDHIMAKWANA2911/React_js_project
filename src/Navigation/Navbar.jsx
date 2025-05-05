import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Form">Form</Link>
            </li>
            <li>
              <Link to="/NavData">Data</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}