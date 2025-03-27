import React from "react";
import CustomSection from "../CustomSection";

const YourData = () => {
  return (
    <>
      <CustomSection
        title="100% your data"
        description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        buttonText="Read more"
        backgroundColor = "var(--white-color)"
        textColor="var(--black-color)"
      />
    </>
  );
};

export default YourData;
