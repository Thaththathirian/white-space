import React from "react";
import CustomBtn from "../CustomBtn";
import "./extension-and-customize.css";

const ExtensionAndCustomize = () => {
  return (

      <div className="ext-section">
        <div className="ext-details">
          <h1>Use as Extension</h1>
          <p>
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <div className="ext-btn">
            <CustomBtn text="Let's Go" />
          </div>
        </div>
        <div className="ext-blank"></div>
      </div>


  );
};

export default ExtensionAndCustomize;
