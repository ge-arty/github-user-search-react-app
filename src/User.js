import React from "react";

export default function User(props) {
  return (
    <div className="user-container">
      <img src={props.src} alt="avatar" />
      <div className="main-info">
        <h2 className="name">{props.name}</h2>
        <p className="login">{props.login}</p>
        <p className="join-date">{props.joinDate}</p>
        <p className="bio">{props.bio}</p>
      </div>
      <div className="followers-box">
        <div className="repos-count-box">
          <p>Repos</p>
          <p className="repos-count">{props.publicRepos}</p>
        </div>
        <div className="followers-count-box">
          <p>followers</p>
          <p className="followers-count">{props.followers}</p>
        </div>
        <div className="following-count-box">
          <p>following</p>
          <p className="following-count">{props.following}</p>
        </div>
      </div>
      <div className="media-container">
        <div className="location-box">
          <img src="#" alt="location-icon" />
        </div>
        <div className="twitter-box"></div>
        <div className="github-box"></div>
        <div className="company"></div>
      </div>
    </div>
  );
}
