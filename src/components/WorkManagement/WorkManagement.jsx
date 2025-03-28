import React from "react";
import CustomSection from "../common/CustomSection";

const WorkManagement = () => {
  return (
    <>
      <CustomSection
        title="Project Management"
        description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        buttonText="Get Started"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
      />
      <CustomSection
        title="Work together"
        description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        buttonText="Get Started"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        imageOnRight={false}
      />
    </>
  );
};

export default WorkManagement;
