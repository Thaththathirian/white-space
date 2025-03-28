import React from "react";
import { motion } from "framer-motion";
import "./your-work.css";
import CustomBtn from "../common/CustomBtn";

const YourWork = () => {
  return (
    <motion.div
      className="your-work"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
