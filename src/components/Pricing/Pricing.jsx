import React from "react";
import "./pricing.css";

const Pricing = () => {
  const plans = [
    {
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
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1 className="pricing-title">Choose Your Plan</h1>
        <p className="pricing-subtitle">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, we have the right plan for you.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.className}`}>
            <p className="plan-name">{plan.name}</p>
            <h3 className="plan-price">{plan.price}</h3>
            <p className="plan-title">{plan.planTitle}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;