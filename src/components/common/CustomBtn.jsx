import React from "react";
import "./common-style.css";
import { HiArrowSmallRight } from "react-icons/hi2";

const CustomBtn = ({
  text,
  showArrow = true,
  BgColor = "var(--blue-color)",
  color = "var(--white-color)",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`custom-btn ${className}`}
      style={{ backgroundColor: BgColor, color: color }}
      onClick={onClick}
    >
      {text}
      {showArrow && <HiArrowSmallRight className="cb-icon-style" />}
    </button>
  );
};

export default CustomBtn;
