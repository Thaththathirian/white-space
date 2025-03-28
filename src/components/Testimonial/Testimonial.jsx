import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { BiPlanet, BiSolidQuoteLeft } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import PaginationDots from "../common/PaginationDots";

const testimonials = [
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    profile: "/assets/profile1.png",
    name: "Oberon Shaw, MCH",
    designation: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    profile: "/assets/profile2.png",
    name: "Oberon Shaw, MCH",
    designation: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    profile: "/assets/profile3.png",
    name: "Oberon Shaw, MCH",
    designation: "Head of Talent Acquisition, North America",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) setVisibleCount(3);
    else if (window.innerWidth >= 768) setVisibleCount(2);
    else setVisibleCount(1);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index * visibleCount);
  };

  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  return (
    <div className="testimonial">
      <h1 className="testimonial-title">What Our Clients Says</h1>
      
      <div className="testimonial-container">
        <div className="testimonial-wrapper">
          {testimonials
            .slice(currentIndex, currentIndex + visibleCount)
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <BiSolidQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{item.comment}</p>
                <div className="divider"></div>
                <div className="client-details">
                  <img src={item.profile} alt={item.name} />
                  <div className="client-info">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <PaginationDots
          totalSlides={totalGroups}
          currentSlide={Math.floor(currentIndex / visibleCount)}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default Testimonial;