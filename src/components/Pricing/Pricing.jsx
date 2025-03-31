import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { TiTick } from "react-icons/ti";
import PaginationDots from "../common/PaginationDots";
import "./pricing.css";

// highlight
import PricingHighLight1440 from "../../assets/pricing-high-1440px.svg?react";

const Pricing = () => {
  const [activeCard, setActiveCard] = useState("Personal");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 768) {
        setCurrentSlide(1);
        setActiveCard("Personal");
      }
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plans = [
    {
      id: "Free",
      name: "Free",
      price: "$0",
      planTitle: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      className: "free-plan",
    },
    {
      id: "Personal",
      name: "Personal",
      price: "$11.99",
      planTitle: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      className: "personal-plan",
    },
    {
      id: "Organization",
      name: "Organization",
      price: "$49.99",
      planTitle: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      className: "organization-plan",
    },
  ];

  const goToSlide = (index) => {
    const maxSlides = plans.length - 1;
    const validIndex = Math.min(Math.max(index, 0), maxSlides);
    setCurrentSlide(validIndex);
    setActiveCard(plans[validIndex].id);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const handleCardClick = (index, id) => {
    if (windowWidth <= 1152) {
      goToSlide(index);
    } else {
      setActiveCard(id);
    }
  };

  // Touch handling for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const getSliderTransform = () => {
    if (windowWidth <= 480) {
      return `translateX(-${currentSlide * 100}%)`;
    } else if (windowWidth <= 768) {
      return `translateX(calc(-${currentSlide * 100}% + ${
        currentSlide === 0 ? 10 : currentSlide === 2 ? -10 : 0
      }%))`;
    } else {
      `translateX(-${currentSlide * 100}%)`;
    }
  };

  return (
    <section className="pricing-section">
      <motion.div
        className="pricing-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>
          Choose
          <span className="pricing-highlight-wrapper">
            <span className="pricing-highlight-text">Your Plan</span>
            <PricingHighLight1440 className="pricing-highlight-svg" />
          </span>
        </h1>
        <p>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, we have the right plan for you.
        </p>
      </motion.div>

      <div
        className="pricing-grid-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="pricing-grid"
          ref={sliderRef}
          style={{
            transform: windowWidth <= 768 ? getSliderTransform() : "none",
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.className} ${
                activeCard === plan.id ? "active" : ""
              } ${currentSlide === index ? "current-slide" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                zIndex: activeCard === plan.id ? 2 : 1,
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => windowWidth > 768 && setActiveCard(plan.id)}
              onMouseLeave={() =>
                windowWidth > 768 && setActiveCard("Personal")
              }
              onClick={() => handleCardClick(index, plan.id)}
              whileHover={
                windowWidth > 768
                  ? {
                      scale: activeCard === plan.id ? 1.02 : 1.01,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }
                  : {}
              }
              whileTap={windowWidth <= 768 ? { scale: 0.98 } : { scale: 0.99 }}
            >
              <p className="plan-name">{plan.name}</p>
              <motion.h4
                className="plan-price"
                animate={{
                  color:
                    activeCard === plan.id
                      ? "var(--yellow-color)"
                      : "var(--black-color)",
                }}
                transition={{ duration: 0.3 }}
              >
                {plan.price}
              </motion.h4>
              <p className="plan-title">{plan.planTitle}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <div className="tick-and-list" key={i}>
                    <TiTick className="tick-icon" />
                    <li>{feature}</li>
                  </div>
                ))}
              </ul>
              <button className="plan-button">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination dots for mobile view */}
      {windowWidth <= 480 && (
        <PaginationDots
          totalSlides={plans.length}
          currentSlide={currentSlide}
          onDotClick={goToSlide}
        />
      )}
    </section>
  );
};

export default Pricing;
