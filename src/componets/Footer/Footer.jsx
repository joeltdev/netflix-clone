import React from "react";
import netflixLogo from "../../assets/netflix_favicon.ico";
import "./Footer.css"; // Assuming your CSS file is named Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Netflix Logo */}
        <div className="logo-container">
          <img src={netflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </div>
      </div>
      <div className="footer-content">
        <p className="footer-heading">Questions? Contact us.</p>
        <div className="footer-columns">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Netflix Originals</li>
            <li>Netflix India</li>
          </ul>
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Redeem Gift Cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Buy Gift Cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
