import React from "react";
import "./sponsors.css";

import { FaApple, FaWindows } from "react-icons/fa";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1 className="sponsors-title">Our sponsors</h1>
      <div className="sponsors-company">
        <FaApple className="sponsors-icon" />
        <img
          src="/assets/Microsoft.png"
          alt="Microsoft icon"
          className="sponsor-microsoft"
        />
        <img
          src="/assets/Slack.png"
          alt="Slack icon"
          className="sponsor-slack"
        />
        <img
          src="/assets/google.png"
          alt="Google icon"
          className="sponsor-google"
        />
      </div>
    </div>
  );
};

export default Sponsors;
