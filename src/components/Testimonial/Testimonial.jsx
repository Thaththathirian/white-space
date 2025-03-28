import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
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
    if (window.innerWidth >= 1152) setVisibleCount(3);
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

  // const totalGroups = Math.ceil(testimonials.length / visibleCount);

  return (
    <div className="testimonial">
      <h1 className="testimonial-title">What Our Clients Says</h1>

      <div className="testimonial-container">
        <div className="testimonial-wrapper">
          {testimonials
            // .slice(currentIndex, currentIndex + visibleCount)
            .map((item, index) => (
              <div
                key={index}
                className="testimonial-card"
              >
                <div className="testimonial-quote-icon">

                <BiSolidQuoteLeft className="quote-icon" />
                </div>
                <p className="testimonial-text">{item.comment}</p>
                <div className="divider-line"></div>
                <div className="client-details">
                  <img src={item.profile} alt={item.name} className="client-image"/>
                  <div className="client-info">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      <PaginationDots
        totalSlides={testimonials.length}
        currentSlide={Math.floor(currentIndex / visibleCount)}
        onDotClick={handleDotClick}
        className="testimonial-pagination"
        dotSize="12px"
      />
      </div>
    </div>
  );
};

export default Testimonial;