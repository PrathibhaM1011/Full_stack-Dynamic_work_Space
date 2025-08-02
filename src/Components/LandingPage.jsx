import React from "react";
import "../LandingPage.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Preview.png"; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="top-bar">
        <div className="menu-left"></div>
        <div className="menu-right">
          <span>Home</span>
          <span>Subscribe</span>
          <div className="hamburger">&#9776;</div>
        </div>
      </div>

      <div className="landing-content">
  <div className="left">
    <img src={logo} alt="Worksy Logo" className="logo" />
    <p className="tagline">your work our place</p>
  </div>

  <div className="right">
    
    <h1 className="main-heading">A NEW WAY TO WORK<br />STARTS HERE</h1>
    <p className="sub-text">
      Discover flexible, inspiring spaces tailored for your productivity.
    </p>
    <button className="cta-button">Learn More</button>
    <div className="social-icons">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  </div>
</div>

    </div>
  );
};

export default LandingPage;
