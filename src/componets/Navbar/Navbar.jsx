import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import Profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li> Brower by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={Profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
