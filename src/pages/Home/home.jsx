import React from "react";
import "./home.css";
import Navbar from "../../componets/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitileCards from "../../componets/TitileCards/TitileCards";
import Footer from "../../componets/Footer/Footer";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-img" />
          <p>
            Welcome to the world of endless stories. Stream, explore, and binge
            your favorites. Your entertainment journey starts here!
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              More Info
              <img src={infoIcon} alt="" />
            </button>
          </div>
          <TitileCards />
        </div>
      </div>
      <div className="more-cards">
        <TitileCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitileCards title={"Only on Netflix"} category={"popular"} />
        <TitileCards title={"Upcoming"} category={"upcoming"} />
        <TitileCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default home;
