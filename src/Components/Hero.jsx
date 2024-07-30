import React from "react";
import "./Hero.css";
function Hero() {
  function scrollToMenu() {
    window.scrollTo({ top: 800, behavior: "smooth" });
  }
  function scrollToContact() {
    window.scrollTo({ top: 1600, behavior: "smooth" });
  }
  return (
    <div className="hero-container">
      <div className="pop-up">
        <img src="/hvlogo.png" />
        <h1>Welcome to Hello Vietnam! Restaurant</h1>

        <div className="buttons">
          <div className="top-btns">
            <button className="top" onClick={scrollToMenu}>
              OUR MENU
            </button>
            <a href="https://www.ubereats.com/" targetcd="_blank">
              <button className="top">ORDER ONLINE</button>
            </a>
          </div>
          <button className="bottom" onClick={scrollToContact}>
            WE ARE HIRING
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
