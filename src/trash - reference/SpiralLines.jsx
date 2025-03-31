import React, { useEffect, useState } from "react";
import "./circles-and-spiral.css";

const SpiralLines = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const generateSpiralPath = () => {
      let d = "M 400 200 "; // Start position (centered)
      let angle = 0;
      let radius = 5;
      const centerX = 400, centerY = 200; // SVG center
      const numLoops = 50; // Adjust for more loops

      for (let i = 0; i < numLoops; i++) {
        angle += 0.2; // Increase angle for smooth spiral
        radius += 2; // Expand outward
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        d += `L ${x} ${y} `;
      }
      return d;
    };

    setPath(generateSpiralPath());
  }, []);

  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="spiral-svg">
      <path d={path} stroke="white" strokeWidth="2" fill="none" className="spiral-path" />
    </svg>
  );
};

export default SpiralLines;