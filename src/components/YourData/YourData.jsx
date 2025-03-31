import React from "react";
import CustomSection from "../common/CustomSection";
// import HalfCircle from "../../../public/assets/elements/your-data-element.svg";
// import HalfCircle from "./assets/elements/your-data-element.svg?react";
import HalfCircle from "../../assets/your-data-element.svg?react";
import './your-data.css'

const YourData = () => {
  return (
    <>
      <CustomSection
        title="100% your data"
        description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        buttonText="Read more"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        imageBackgroundColor="var(--white-color)"
        customClassName="your-data"
        customImageClassName="your-data-image"
        imageComponent={
          <HalfCircle
          className = "half-circle"
            style={{
              width: "clamp(18.125rem, 60vw, 42.5rem)",
              height: "clamp(10rem, 40vw, 23.75rem)",
            }}
          />
        }
      />
    </>
  );
};

export default YourData;
