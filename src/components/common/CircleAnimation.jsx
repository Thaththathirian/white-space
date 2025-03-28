import React, { useState, useEffect } from "react";
import "./circles-and-spiral.css";

const CircleAnimation = () => {
  const innerDots = 4;
  const outerDots = 5;
  const innerRadius = 30;
  const outerRadius = 50;
  const logo = "./assets/logo-blue.png";

  const generateRandomColors = (count) => {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    return Array.from(
      { length: count },
      () => colors[Math.floor(Math.random() * colors.length)]
    );
  };

  const [dotSize, setDotSize] = useState(25);
  const [innerDotColors] = useState(generateRandomColors(innerDots));
  const [outerDotColors] = useState(generateRandomColors(outerDots));

  useEffect(() => {
    const updateDotSize = () => {
      const newSize = Math.max(25, Math.min(35, window.innerWidth * 0.05));
      setDotSize(newSize);
    };

    updateDotSize();
    window.addEventListener("resize", updateDotSize);
    return () => window.removeEventListener("resize", updateDotSize);
  }, []);

  return (
    <div className="dots-circle-container">
      {/* SVG Circles */}
      <svg className="circle-path" viewBox="0 0 100 100">
        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r={innerRadius}
          fill="none"
          stroke="var(--blue-color)"
          strokeOpacity="0.7"
          strokeWidth="0.5"
          strokeDasharray="3,3"
        />
        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r={outerRadius}
          fill="none"
          stroke="var(--blue-color)"
          strokeOpacity="0.7"
          strokeWidth="0.5"
          strokeDasharray="3,3"
        />
      </svg>
      {/* Centered Logo */}
      <div className="dots-center-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Inner Circle Dots */}
      <div className="dots">
        {Array.from({ length: innerDots }).map((_, index) => {
          const angle = (index / innerDots) * 2 * Math.PI; // Properly distribute across 360°
          const x = 50 + innerRadius * Math.cos(angle);
          const y = 50 + innerRadius * Math.sin(angle);
          return (
            <span
              key={`inner-${index}`}
              className="dot inner-dot"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                background: innerDotColors[index],
                transform: "translate(-50%, -50%)",
              }}
            ></span>
          );
        })}
      </div>

      {/* Outer Circle Dots */}
      <div className="dots">
        {Array.from({ length: outerDots }).map((_, index) => {
          const angle = (index / outerDots) * 2 * Math.PI; // Properly distribute across 360°
          const x = 50 + outerRadius * Math.cos(angle);
          const y = 50 + outerRadius * Math.sin(angle);
          return (
            <span
              key={`outer-${index}`}
              className="dot outer-dot"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                background: outerDotColors[index],
                transform: "translate(-50%, -50%)",
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default CircleAnimation;
