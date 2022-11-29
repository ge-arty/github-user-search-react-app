import React from "react";
import searchIcon from "./images/search-icon.png";

export default function Search() {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="search-icon" />

      <input
        placeholder="Search GitHub username…"
        className="search-input"
        type="text"
      />
      <p className="search-noresult-text">no results</p>
      <button className="search-btn">Search</button>
    </div>
  );
}
