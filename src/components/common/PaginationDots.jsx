import React from "react";
import './common-style.css'

const PaginationDots = ({
  totalSlides,
  currentSlide,
  onDotClick,
  activeColor = "var(--dark-blue-color)",
  inactiveColor = "var(--light-blue-color)",
  dotSize = "14px",
  className = "",
}) => {
  return (
    <div className={`pagination-dots ${className}`}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className="dot"
          onClick={() => onDotClick(index)}
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor:
              currentSlide === index ? activeColor : inactiveColor,
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
