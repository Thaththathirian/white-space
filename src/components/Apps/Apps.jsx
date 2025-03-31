import React from "react";
import CustomSection from "../common/CustomSection";
import AppsElements from "../../assets/Apps.svg?react";
import "./apps.css";

// import Spiral1440 from "../../assets/apps-1440px.svg?react";
// import Spiral1152 from "../../assets/apps-1152px.svg?react";
// import Spiral768 from "../../assets/apps-768px.svg?react";
// import Spiral480 from "../../assets/apps-480px.svg?react";
// import CustomSpiral from "../common/CustomSpiral";

const Apps = () => {
  return (
    <>
      <CustomSection
        title="Work with Your Favorite Apps Using whitepace"
        description="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
        buttonText="Read more"
        imageOnRight={false}
        customClassName="apps"
        // customImageClassName="apps-element-wrapper"
        imageComponent={
          <div className="apps-element-wrapper">
            <AppsElements
              className="apps-element"
              style={{
                display: "block",
                overflow: "visible",
              }}
            />
          </div>
        }
        imageBackgroundColor="transparent"
      >
        {/* <CustomSpiral
          Spiral1440={Spiral1440}
          Spiral1152={Spiral1152}
          Spiral768={Spiral768}
          Spiral480={Spiral480}
          spiralClass1152="apps-1152"
          spiralClass1440="apps-1440"
          spiralClass768="apps-768"
          spiralClass480="apps-480"
        /> */}
      </CustomSection>
    </>
  );
};

export default Apps;
