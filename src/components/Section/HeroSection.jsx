import React from "react";
import CustomSection from "../common/CustomSection";
import './hero-section.css'

const HeroSection = () => {
  return (
    <CustomSection
      title="Get More Done with whitepace"
      description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
      buttonText="Try Whitespace free"
      customClassName="hero-section"
    />
  );
};

export default HeroSection;
