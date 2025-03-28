import React from "react";
import "./free-trial.css";
import CustomBtn from "../common/CustomBtn";
import { FaApple, FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const FreeTrial = () => {
  return (
    <div className="free-trial">
      <h1 className="free-trial-title">Try Whitespace today</h1>
      <p className="free-trial-desc">
        Get started for free.{" "}
        <span>Add your whole team as your needs grow.</span>
      </p>
      <CustomBtn text="Try Taskey free" className="free-trial-btn" />
      <p className="free-trial-contact">On a big team? Contact sales</p>
      <div className="free-trial-icons">
        <FaApple className="trial-icon" />
        <FaWindows className="trial-icon" />
        <IoLogoAndroid className="trial-icon" />
      </div>
    </div>
  );
};

export default FreeTrial;
