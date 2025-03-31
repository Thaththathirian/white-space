import React from "react";
import CustomSection from "../common/CustomSection";
import "./hero-section.css";
import CustomSpiral from "../common/CustomSpiral";


import Spiral1440 from "../../assets/hero-1440px.svg?react";
import Spiral1152 from "../../assets/hero-1152px.svg?react";
import Spiral768 from "../../assets/hero-768px.svg?react";
import Spiral480 from "../../assets/hero-480px.svg?react";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      
      <CustomSection
        title="Get More Done with whitepace"
        description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        buttonText="Try Whitespace free"
        customClassName="hero-section"
        customImageClassName="hero-section-image"
      >
<CustomSpiral
        Spiral1440={Spiral1440}
        Spiral1152={Spiral1152}
        Spiral768={Spiral768}
        Spiral480={Spiral480}
        spiralClass1152="hero-1152"
        spiralClass1440="hero-1440"
        spiralClass768="hero-768"
        spiralClass480="hero-480"
      />
      </CustomSection>
    </div>
  );
};

export default HeroSection;