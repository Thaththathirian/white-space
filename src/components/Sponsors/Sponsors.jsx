import React from "react";
import "./sponsors.css";

import { FaApple } from "react-icons/fa";
// import SketchHighlight from "../common/SketchHighlight";

// highlight
import SponsorsHighLight1440 from "../../assets/sponsors-high-1440px.svg?react";

const Sponsors = () => {
  return (
    <div className="sponsors">
      {/* <h1 className="sponsors-title">
        Our <SketchHighlight>Sponsors</SketchHighlight>
      </h1> */}
      <h1 className="sponsors-title">
        Our{" "}
        <span className="sponsors-highlight-wrapper">
          <span className="sponsors-highlight-text">Sponsors</span>
          <SponsorsHighLight1440 className="sponsors-highlight-svg" />
        </span>
      </h1>
      <div className="sponsors-company">
        <FaApple className="apple-icon" />
        <img
          src="/assets/Microsoft.svg"
          alt="Microsoft icon"
          className="sponsor-microsoft"
        />
        <img
          src="/assets/Slack.svg"
          alt="Slack icon"
          className="sponsor-slack"
        />
        <img
          src="/assets/Google.svg"
          alt="Google icon"
          className="sponsor-google"
        />
      </div>
    </div>
  );
};

export default Sponsors;
