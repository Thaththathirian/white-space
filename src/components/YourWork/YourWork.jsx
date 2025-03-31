import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./your-work.css";
import CustomBtn from "../common/CustomBtn";
import Spiral1440 from "../../assets/your-work-1440px.svg?react";
import Spiral768 from "../../assets/your-work-768px.svg?react";

const YourWork = () => {
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
    if (windowSize.width > 1152) return <Spiral1440 className="your-work-spiral-1440" />;
    if (windowSize.width > 768) return null;
    if (windowSize.width > 480) return <Spiral768 className="your-work-spiral-768" />;
    return null; // No spiral for mobile
  };

  return (
    <motion.div
      className="your-work"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="your-work-spiral-container">{getSpiralComponent()}</div>
      {/* <div className="spiral-container">
        <Spiral1440 className="spiral spiral-1440" />
        <Spiral768 className="spiral spiral-768" />
      </div> */}

      <motion.h1
        className="your-work-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Your work, everywhere you are
      </motion.h1>

      <motion.p
        className="your-work-desc"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Access your notes from your computer, phone, or tablet by synchronizing
        with various services, including whitepace, Dropbox, and OneDrive. The
        app is available on Windows, macOS, Linux, Android, and iOS. A terminal
        app is also available!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <CustomBtn text="Try Taskey" className="your-work-btn" />
      </motion.div>
    </motion.div>
  );
};

export default YourWork;
