import React, { useState, useEffect } from "react";
import "./circles-and-spiral.css";

const CircleAnimation = () => {
  const innerDots = 4;
  const outerDots = 5;
  const innerRadius = 30;
  const outerRadius = 50;

  const logo = "./assets/logo-blue.png";

  const generateRandomColors = (count) => {
    const colors = ["#FF5758", "#37A3FF", "#00CA75", "#FFDC4D", "#FFBF60"];
    return Array.from(
      { length: count },
      () => colors[Math.floor(Math.random() * colors.length)]
    );
  };

  const [dotSize, setDotSize] = useState(25);
  const [innerDotColors] = useState(generateRandomColors(innerDots));
  const [outerDotColors] = useState(generateRandomColors(outerDots));
  const [dimensions, setDimensions] = useState({
    outerDiameter: 260,
    innerDiameter: 150,
  });

  useEffect(() => {
    const updateCircleSizes = () => {
      // Get current viewport width, clamped between 480 and 1440
      const viewportWidth = Math.min(Math.max(window.innerWidth, 480), 1440);
      
      // Calculate ratio (0 at 480px, 1 at 1440px)
      const ratio = (viewportWidth - 480) / (1440 - 480);
      
      // Calculate diameters
      const outerDiameter = 260 + (540 - 260) * ratio;
      const innerDiameter = 150 + (315 - 150) * ratio;
      
      setDimensions({ outerDiameter, innerDiameter });
    };

    // Initial calculation
    updateCircleSizes();
    
    // Add resize listener
    window.addEventListener('resize', updateCircleSizes);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateCircleSizes);
  }, []);

  useEffect(() => {
    const updateDotSize = () => {
      const newSize = Math.max(25, Math.min(55, window.innerWidth * 0.05));
      setDotSize(newSize);
    };

    updateDotSize();
    window.addEventListener("resize", updateDotSize);
    return () => window.removeEventListener("resize", updateDotSize);
  }, []);

  const { outerDiameter, innerDiameter } = dimensions;
  const center = outerDiameter / 2;


  return (
    <div className="dots-circle-container">
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg 
        width={outerDiameter} 
        height={outerDiameter} 
        viewBox={`0 0 ${outerDiameter} ${outerDiameter}`}
      >
        {/* Outer circle */}
        <circle 
          cx={center}
          cy={center}
          r={outerDiameter / 2}
          fill="none"
          stroke="#3498db"
          strokeWidth="2"
        />
        
        {/* Inner circle */}
        <circle 
          cx={center}
          cy={center}
          r={innerDiameter / 2}
          fill="none"
          stroke="#e74c3c"
          strokeWidth="2"
        />
      </svg>
    </div>
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
