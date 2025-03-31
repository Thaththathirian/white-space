import React, { useEffect, useState } from "react";
import CustomSection from "../common/CustomSection";
import CircleAnimation from "../common/CircleAnimation";
import "./work-management.css";
import Spiral1440 from "../../assets/manage-1440px.svg?react";
import Spiral1152 from "../../assets/manage-1152px.svg?react";
import Spiral768 from "../../assets/manage-768px.svg?react";
import Spiral480 from "../../assets/manage-480px.svg?react";

// highlight
import HighLight1440 from "../../assets/proj-high-1440px.svg?react";
import TogetherHighLight1440 from "../../assets/proj-high-1440px.svg?react";

const WorkManagement = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // 100ms debounce
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSpiralComponent = () => {
    if (windowSize.width > 1152) return <Spiral1440 className="spiral spiral-1440"  />;
    if (windowSize.width <= 1152 && windowSize.width > 768) return <Spiral1152 className="spiral spiral-1152" />;
    if (windowSize.width <= 768 && windowSize.width > 480)
      return <Spiral768 className="spiral spiral-768" />;
    if (windowSize.width <= 480) return <Spiral480 className="spiral spiral-480" />;
    return null; 
  };
  return (
    <>
      <CustomSection
        title="Project"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        buttonText="Get Started"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        customClassName="project-management"

        highlightClassName = "project-highlight"
        highlightTitle = "Management"
        highlightSvg = {<HighLight1440 className="project-highlight-svg"/>}
        >
          <div className="spiral-container">{getSpiralComponent()}</div>
        </CustomSection>

      <CustomSection
        title="Work"
        description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        buttonText="Get Started"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        imageOnRight={false}
        imageComponent={<CircleAnimation />}
        imageBackgroundColor="var(--white-color)"
        customClassName="work-together"
        customImageClassName="circle-dots-image"

        highlightClassName = "project-highlight"
        highlightTitle = "together"
        highlightSvg = {<TogetherHighLight1440 className="together-highlight-svg"/>}
      />
    </>
  );
};

export default WorkManagement;
