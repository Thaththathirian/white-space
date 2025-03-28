import React from "react";

const HighlightedText = ({ children, color = "yellow", width = "100%", height = "10px" }) => {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: width,
          height: height,
          backgroundColor: color,
          zIndex: -1,
        }}
      ></span>
      {children}
    </span>
  );
};

export default HighlightedText;
