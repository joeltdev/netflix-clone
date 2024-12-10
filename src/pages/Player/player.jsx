import React from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back Arrow" />
      <iframe
        src="https://www.youtube.com/embed/m8rpXHCa8kE"
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
