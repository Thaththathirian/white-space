// ResponsiveBackground.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./common-style.css";


const ResponsiveBackground = ({
  svg1440,
  svg1152,
  svg768,
  svg480,
  className,
}) => {
  const [currentSvg, setCurrentSvg] = useState(null);

  useEffect(() => {
    // Function to determine which SVG to display based on viewport width
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setCurrentSvg(svg1440);
      } else if (width >= 1152) {
        setCurrentSvg(svg1152);
      } else if (width >= 768) {
        setCurrentSvg(svg768);
      } else {
        setCurrentSvg(svg480);
      }
    };

    // Set initial SVG on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [svg1440, svg1152, svg768, svg480]);

  return (
    <motion.div
      className={`responsive-svg-background ${className || ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentSvg}
    </motion.div>
  );
};

export default ResponsiveBackground;
