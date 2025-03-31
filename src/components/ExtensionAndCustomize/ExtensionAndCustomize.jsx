import React from "react";
import CustomSection from "../common/CustomSection";
import './ExtensionAndCustomize.css'

// highlight
import ExtnHighLight1440 from "../../assets/extn-high-1440px.svg?react";
import NeedsHighLight1440 from "../../assets/needs-high-1440px.svg?react";

const ExtensionAndCustomize = () => {
  return (
    <>
      {/* extension */}
      <CustomSection
        title="Use as"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        buttonText="Let's Go"

        highlightTitle="Extension"
        highlightSvg={<ExtnHighLight1440 className="extn-highlight-svg" />}
      />

      {/* customization */}
      <CustomSection
        title="Customise it to"
        description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        buttonText="Let's Go"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        imageOnRight={false}

        highlightTitle="your needs"
        highlightSvg={<NeedsHighLight1440 className="needs-highlight-svg" />}
      />
    </>
  );
};

export default ExtensionAndCustomize;
