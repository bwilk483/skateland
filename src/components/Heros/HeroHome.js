import "./HeroStyles.css";

import React from "react";

import heroImg from "../../img/jumbo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
