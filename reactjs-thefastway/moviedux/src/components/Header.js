import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <img src="logo.png" className="logo" alt="moviedux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </header>
  );
}
