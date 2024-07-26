import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-container">
      <div className="pop-up">
        <img src="/hvlogo.png" />
        <h1>Welcome to Hello Vietnam! Restaurant</h1>

        <div className="buttons">
          <div className="top-btns">
            <button className="top">OUR MENU</button>
            <button className="top">ORDER ONLINE</button>
          </div>
          <button className="bottom">WE ARE HIRING</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
