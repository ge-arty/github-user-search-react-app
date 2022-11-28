import React from "react";
import themeIcon from "./images/moon.png";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-title">devfinder</h1>
      <div className="theme-box">
        <button className="theme-btn">Dark</button>
        <img src={themeIcon} alt="theme-icon" />
      </div>
    </div>
  );
}
