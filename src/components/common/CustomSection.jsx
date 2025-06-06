import React from "react";
import "./common-style.css";
import PropTypes from "prop-types";
import CustomBtn from "./CustomBtn";
import { motion } from "framer-motion";

const CustomSection = ({
  title,
  description,
  buttonText,
  imageBackgroundColor,
  backgroundColor,
  textColor,
  imageOnRight = true,
  children,
  buttonOnClick,
  imageComponent,
  fullHeight = false,
  customClassName,
  customImageClassName,

  highlightClassName,
  highlightTitle,
  highlightSvg
}) => {
  return (
    <section
      className={`custom-section ${customClassName}`}
      style={{
        backgroundColor: backgroundColor || "var(--dark-blue-color)",
        color: textColor || "var(--white-color)",
        minHeight: fullHeight ? "100vh" : "80vh",
        position: "relative",
      }}
    >
      {!imageOnRight && (
        <motion.div
          className={`custom-sec-image custom-image-left ${customImageClassName}`}
          style={{
            backgroundColor: imageBackgroundColor || "var(--light-blue-color)",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {imageComponent}
        </motion.div>
      )}


      <motion.div
        className="custom-sec-details"
        initial={{ opacity: 0, x: imageOnRight ? -800 : 800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h1>
          {title} <span className={`custom-highlight ${highlightClassName}`}> {highlightTitle} {highlightSvg}</span>
        </h1>
        <p>{description}</p>
        {children}
        {buttonText && (
          <div className="custom-sec-btn">
            <CustomBtn text={buttonText} onClick={buttonOnClick} />
          </div>
        )}
      </motion.div>


      {imageOnRight && (
        <motion.div
          className={`custom-sec-image ${customImageClassName}`}
          style={{
            backgroundColor: imageBackgroundColor || "var(--light-blue-color)",
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {imageComponent}
        </motion.div>
      )}
    </section>
  );
};

CustomSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonOnClick: PropTypes.func,
  imageBackgroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  imageOnRight: PropTypes.bool,
  children: PropTypes.node,
  imageComponent: PropTypes.node,
  fullHeight: PropTypes.bool,
  customClassName: PropTypes.string,
};

export default CustomSection;
