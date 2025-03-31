import React, { useEffect, useState } from "react";
import "./common-style.css";

const CustomSpiral = ({
  Spiral1440,
  Spiral1152,
  Spiral768,
  Spiral480,
  spiralContainerClass = "",
  spiralClass1440 = "",
  spiralClass1152 = " = ",
  spiralClass768 = "",
  spiralClass480 = "",
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // 100ms debounce
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSpiralComponent = () => {
    if (windowSize.width > 1152)
      return <Spiral1440 className={`custom-spiral custom-spiral-1440 ${spiralClass1440}`} />;
    if (windowSize.width <= 1152 && windowSize.width > 768)
      return <Spiral1152 className={`custom-spiral custom-spiral-1152 ${spiralClass1152}`} />;
    if (windowSize.width <= 768 && windowSize.width > 480)
      return <Spiral768 className={`custom-spiral custom-spiral-768 ${spiralClass768}`} />;
    if (windowSize.width <= 480)
      return <Spiral480 className={`custom-spiral custom-spiral-480 ${spiralClass480}`} />;
    return null; // No spiral for mobile
  };
  return (
    <div className={`custom-spiral-container ${spiralContainerClass}`}>
      {getSpiralComponent()}
    </div>
  );
};

export default CustomSpiral;