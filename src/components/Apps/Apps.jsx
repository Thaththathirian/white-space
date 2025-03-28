import React from "react";
import CustomSection from "../common/CustomSection";
import AnimatedLogoCircles  from "../common/AnimatedLogoCircles";

const Apps = () => {
  return (
    <>
      <CustomSection
        title="Work with Your Favorite Apps Using whitepace"
        description="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
        buttonText="Read more"
        imageOnRight={false}
        // imageComponent={<AnimatedLogoCircles />}
        // imageBackgroundColor="var(--white-color)"
      />
    </>
  );
};

export default Apps;
