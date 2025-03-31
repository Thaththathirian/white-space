import React from 'react';
import "./circles-and-spiral.css";

const AnimatedLogoCircles = () => {
  // Logos for each circle's non-intersected area
  const circleLogos = [
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }
  ];

  // Central Logo
  const centerLogo = {
    name: 'YourBrand',
    src: 'https://via.placeholder.com/80' // Replace with your logo
  };

  return (
    <div className="circles-container">
      {/* Three Intersecting Circles */}
      <div className="circle circle-1">
        <div className="circle-logo">
          <img src={circleLogos[0].src} alt={circleLogos[0].name} />
        </div>
      </div>
      <div className="circle circle-2">
        <div className="circle-logo">
          <img src={circleLogos[1].src} alt={circleLogos[1].name} />
        </div>
      </div>
      <div className="circle circle-3">
        <div className="circle-logo">
          <img src={circleLogos[2].src} alt={circleLogos[2].name} />
        </div>
      </div>

      {/* Central Logo at Intersection */}
      <div className="center-logo">
        <img src={centerLogo.src} alt={centerLogo.name} />
      </div>
    </div>
  );
};

export default AnimatedLogoCircles;