import React, { useEffect, useState, useRef } from "react";
import "./testimonial.css";
import { BiSolidQuoteLeft } from "react-icons/bi";

// highlight
import ClientsHighLight1440 from "../../assets/clients-high-1440px.svg?react";

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
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    profile: "/assets/profile4.png",
    name: "Oberon Shaw, MCH",
    designation: "Head of Talent Acquisition, North America",
  },
  {
    comment:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    profile: "/assets/profile5.png",
    name: "Oberon Shaw, MCH",
    designation: "Head of Talent Acquisition, North America",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slidesWrapperRef = useRef(null);

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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goNext();
    if (touchStart - touchEnd < -50) goPrev();
  };

  useEffect(() => {
    if (slidesWrapperRef.current) {
      const slideWidth = 100 / visibleCount;
      slidesWrapperRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }%)`;
    }
  }, [currentIndex, visibleCount]);

  const goToSlide = (index) => {
    if (index >= 0 && index <= testimonials.length - visibleCount) {
      setCurrentIndex(index);
    }
  };

  const goPrev = () => goToSlide(currentIndex - 1);
  const goNext = () => goToSlide(currentIndex + 1);

  const activeGroup = Math.floor(currentIndex / visibleCount);
  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  const renderDots = () => {
    if (testimonials.length <= visibleCount) return null;

    const dots = [];
    const maxVisibleDots = 5;

    if (totalGroups <= maxVisibleDots) {
      for (let i = 0; i < totalGroups; i++) {
        dots.push(
          <button
            key={i}
            className={`pagination-dot ${i === activeGroup ? "active" : ""}`}
            onClick={() => goToSlide(i * visibleCount)}
            aria-label={`Go to slide ${i + 1}`}
          />
        );
      }
    } else {
      const showLeftDots = activeGroup > 2;
      const showRightDots = activeGroup < totalGroups - 3;

      dots.push(
        <button
          key={0}
          className={`pagination-dot ${activeGroup === 0 ? "active" : ""}`}
          onClick={() => goToSlide(0)}
          aria-label="Go to first slide"
        />
      );

      if (showLeftDots) {
        dots.push(
          <span key="left-ellipsis" className="ellipsis">
            ...
          </span>
        );
      } else {
        dots.push(
          <button
            key={1}
            className={`pagination-dot ${activeGroup === 1 ? "active" : ""}`}
            onClick={() => goToSlide(visibleCount)}
            aria-label="Go to slide 2"
          />
        );
      }

      if (showLeftDots && showRightDots) {
        for (let i = activeGroup - 1; i <= activeGroup + 1; i++) {
          dots.push(
            <button
              key={i}
              className={`pagination-dot ${i === activeGroup ? "active" : ""}`}
              onClick={() => goToSlide(i * visibleCount)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      } else if (showLeftDots) {
        for (let i = totalGroups - 3; i < totalGroups - 1; i++) {
          dots.push(
            <button
              key={i}
              className={`pagination-dot ${i === activeGroup ? "active" : ""}`}
              onClick={() => goToSlide(i * visibleCount)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      } else if (showRightDots) {
        for (let i = 1; i < 3; i++) {
          dots.push(
            <button
              key={i}
              className={`pagination-dot ${i === activeGroup ? "active" : ""}`}
              onClick={() => goToSlide(i * visibleCount)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      }

      if (showRightDots) {
        dots.push(
          <span key="right-ellipsis" className="ellipsis">
            ...
          </span>
        );
      } else {
        dots.push(
          <button
            key={totalGroups - 2}
            className={`pagination-dot ${
              activeGroup === totalGroups - 2 ? "active" : ""
            }`}
            onClick={() => goToSlide((totalGroups - 2) * visibleCount)}
            aria-label={`Go to slide ${totalGroups - 1}`}
          />
        );
      }

      dots.push(
        <button
          key={totalGroups - 1}
          className={`pagination-dot ${
            activeGroup === totalGroups - 1 ? "active" : ""
          }`}
          onClick={() => goToSlide((totalGroups - 1) * visibleCount)}
          aria-label={`Go to slide ${totalGroups}`}
        />
      );
    }

    return <div className="pagination-dots-container">{dots}</div>;
  };

  return (
    <div className="testimonial">
      <h1 className="tetstimonial-title">
        What Our Clients
        <span className="clients-highlight-wrapper">
          <span className="clients-highlight-text">Says</span>
          <ClientsHighLight1440 className="clients-highlight-svg" />
        </span>
      </h1>

      <div className="testimonial-pagination-container">
        <button
          className="pagination-nav-button prev"
          onClick={goPrev}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          &lt;
        </button>

        <div
          className="testimonial-slides-wrapper"
          ref={slidesWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index >= currentIndex && index < currentIndex + visibleCount
                  ? "visible"
                  : ""
              }`}
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div
                className={`testimonial-card ${
                  index === currentIndex + Math.floor(visibleCount / 2)
                    ? "active"
                    : ""
                }`}
              >
                <div className="testimonial-quote-icon">
                  <BiSolidQuoteLeft className="quote-icon" />
                </div>
                <p className="testimonial-text">{item.comment}</p>
                <div className="divider-line"></div>
                <div className="client-details">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="client-image"
                  />
                  <div className="client-info">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                    <img src="./assets/Btn-Star.png" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="pagination-nav-button next"
          onClick={goNext}
          disabled={currentIndex >= testimonials.length - visibleCount}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>

      {renderDots()}
    </div>
  );
};

export default Testimonial;
