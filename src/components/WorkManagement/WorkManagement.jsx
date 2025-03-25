import React from "react";
import "./work-management.css";
import CustomBtn from "../CustomBtn";

const WorkManagement = () => {
  return (
    <div className="work-management">
      <div className="project-management">
        <div className="project-management-details">
          <h1>Project Management</h1>
          <p>
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <CustomBtn text="Get Started"/>
        </div>
        <div className="project-management-blank"></div>
      </div>

      <div className="work-together">
        <div className="work-together-map"></div>
        <div className="work-together-content">
          <h1>Work together</h1>
          <p>
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <CustomBtn text="Try it now" />
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
