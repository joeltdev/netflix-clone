import React from "react";
import "./home.css";
import Navbar from "../../componets/Navbar/Navbar";
import heroBanner from "../../assets/moana-2-animation-3840x2160-19109.jpg";
import heroTitle from "../../assets/moana_2__2024__logo_png__by_mintmovi3_dia1wc9.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitileCards from "../../componets/TitileCards/TitileCards";
import Footer from "../../componets/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="Hero Title" className="caption-img" />
          <p>
            Welcome to the world of endless stories. Stream, explore, and binge
            your favorites. Your entertainment journey starts here!
          </p>
          <div className="hero-btns">
            <a
              className="btn"
              href="https://youtu.be/hDZ7y8RP5HE?si=AIXwzgN--hmzbWr8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playIcon} alt="Play" />
              Play
            </a>
            <a
              className="btn dark-btn"
              href="https://www.imdb.com/title/tt13622970/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Info
              <img src={infoIcon} alt="More Info" />
            </a>
          </div>
          {/* <TitileCards /> */}
        </div>
      </div>
      <div className="more-cards">
        <TitileCards title={"Blockbuster Movies"} category={"top_rated"} />
        {<TitileCards title={"Only on Netflix"} category={"popular"} />}
        <TitileCards title={"Upcoming"} category={"upcoming"} />
        <TitileCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
