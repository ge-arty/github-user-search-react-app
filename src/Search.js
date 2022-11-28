import React from "react";
import searchIcon from "./images/searchIcon.png";

export default function Search() {
  return (
    <div className="search-container">
      <img className="search-icon" src={searchIcon} alt="" />
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
