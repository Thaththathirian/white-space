import React from "react";
import "./hero-section.css";
import CustomBtn from "../CustomBtn";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-details">
        <h1>Get More Done with whitepace</h1>
        <p>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <div  className="hero-btn" >
        <CustomBtn text="Try Whitespace free" />
        </div>
      </div>
      <div className="hero-blank"></div>
    </section>
  );
};

export default HeroSection;