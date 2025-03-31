import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import "./HexagonDiagram.css";

const HexagonDiagram = () => {
  return (
    <div className="half-container">
      <div className="half-circle">
        {/* Half-circle outline */}
        <div className="half-circle-outline"></div>

        {/* Left and right icons */}
        <div className="half-side-icon half-left-icon">
          <FaWindows size={24} />
        </div>
        <div className="half-side-icon half-right-icon">
          <FaApple size={24} />
        </div>
        <div className="half-endpoint-icon half-left-endpoint">
          <FaWindows size={20} />
        </div>
        <div className="half-endpoint-icon half-right-endpoint">
          <FaApple size={20} />
        </div>

        {/* Centered rectangle with main logo */}
        <div className="half-center-rectangle">
          <div className="half-main-logo">
            <img src="./assets/logo-blue.png" alt="Logo" />
          </div>

          {/* Diagonal lines with end-point icons */}
          <div className="half-diagonal-line half-left-line"></div>
          <div className="half-diagonal-line half-right-line"></div>
        </div>
      </div>
    </div>
  );
};

export default HexagonDiagram;
