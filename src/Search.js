import React, { useContext } from "react";
import searchIcon from "./images/search-icon.png";
import { Context } from "./Context";

export default function Search(props) {
  let theme = useContext(Context);
  return (
    <div
      style={
        theme.switch == true
          ? { backgroundColor: "#1E2A47" }
          : { backgroundColor: "#FEFEFE" }
      }
      className="search-container"
    >
      <img src={searchIcon} alt="search-icon" />

      <input
        style={
          theme.switch == true
            ? { backgroundColor: "#1E2A47", color: "#FEFEFE" }
            : { backgroundColor: "#FEFEFE", color: "#1E2A47" }
        }
        onChange={props.onChange}
        placeholder="Search GitHub username…"
        className="search-input"
        id={theme.switch == true ? "search-input-id" : ""}
        type="text"
      />
      <p className="search-noresult-text">
        {theme.fetched ? "no results" : ""}
      </p>
      <button onClick={props.Click} className="search-btn">
        Search
      </button>
    </div>
  );
}
