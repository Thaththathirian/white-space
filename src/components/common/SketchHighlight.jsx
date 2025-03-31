import React from "react";
import "./common-style.css";

const SketchHighlight = ({ children }) => {
  return (
    <span className="sketch-highlight-container">
      {/* SVG-based hand-drawn highlight */}
      <span className="sketch-highlight-svg">
        <svg viewBox="0 0 100 14" preserveAspectRatio="none">
          <path
            d="M0,13 C15,11 17,2 32,3 C47,4 45,13 60,13 C75,13 78,2 100,4 L100,14 L0,14 Z"
            fill="var(--yellow-color)"
          />
        </svg>
      </span>

      {/* Text content */}
      <span className="sketch-highlight-text">{children}</span>
    </span>
  );
};

export default SketchHighlight;
