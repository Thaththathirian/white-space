import React from "react";
import "./your-data.css";
import CustomBtn from "../CustomBtn";

const YourData = () => {
  return (
    <div className="your-data">
      <div className="project-management">
        <div className="project-management-details">
          <h1>Project Management</h1>
          <p>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <CustomBtn text="Get Started" />
        </div>
        <div className="project-management-blank"></div>
      </div>
    </div>
  );
};

export default YourData;
