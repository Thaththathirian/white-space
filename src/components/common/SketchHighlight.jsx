import React from 'react';
import "./common-style.css";

const SketchHighlight = ({ children }) => {
  return (
    <span className="sketch-highlight-container">
      {/* SVG-based hand-drawn highlight */}
      <span className="sketch-highlight-svg">
        <svg
          viewBox="0 0 100 14"
          preserveAspectRatio="none"
        >
          <path
            d="M0,13 C15,11 17,2 32,3 C47,4 45,13 60,13 C75,13 78,2 100,4 L100,14 L0,14 Z"
            fill="#FFD166"
          />
        </svg>
      </span>

      {/* Text content */}
      <span className="sketch-highlight-text">
        {children}
      </span>
    </span>
  );
};

export default SketchHighlight; 



// const createWavePath = (intensity = 3) => {
//   const points = [];
//   const steps = 5;
//   const height = 14;
  
//   for (let i = 0; i <= steps; i++) {
//     const x = (100/steps) * i;
//     const y = height - intensity * Math.sin(i);
//     if (i === 0) {
//       points.push(`M${x},${y}`);
//     } else {
//       const cp1x = x - (100/steps)/2;
//       const cp1y = y;
//       const cp2x = x - (100/steps)/2;
//       const cp2y = y;
//       points.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`);
//     }
//   }
  
//   points.push(`L100,${height} L0,${height} Z`);
//   return points.join(' ');
// };

// // Usage:
// <path d={createWavePath(4)} />




// const SketchHighlight = ({ 
//   children, 
//   color = "#FFD166",
//   height = 14,
//   waveIntensity = 3,
//   waveWidth = 100
// }) => {
//   const createPath = () => {
//     const points = [];
//     const steps = 5;
    
//     for (let i = 0; i <= steps; i++) {
//       const x = (waveWidth/steps) * i;
//       const y = height - waveIntensity * Math.sin(i);
//       if (i === 0) {
//         points.push(`M${x},${y}`);
//       } else {
//         const cp1x = x - (waveWidth/steps)/2;
//         const cp1y = y;
//         const cp2x = x - (waveWidth/steps)/2;
//         const cp2y = y;
//         points.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`);
//       }
//     }
    
//     points.push(`L${waveWidth},${height} L0,${height} Z`);
//     return points.join(' ');
//   };

//   return (
//     <span className="sketch-highlight-container">
//       <span className="sketch-highlight-text">{children}</span>
//       <span className="sketch-highlight-svg">
//         <svg
//           viewBox={`0 0 ${waveWidth} ${height}`}
//           preserveAspectRatio="none"
//         >
//           <path d={createPath()} fill={color} />
//         </svg>
//       </span>
//     </span>
//   );
// };