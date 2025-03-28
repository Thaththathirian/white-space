import React from "react";
import CustomSection from "../common/CustomSection";

const ExtensionAndCustomize = () => {
  return (
    <>
      {/* extension */}
      <CustomSection
        title="Use as Extension"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        buttonText="Let's Go"
      />

      {/* customization */}
      <CustomSection
        title="Customise it to your needs"
        description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        buttonText="Let's Go"
        backgroundColor="var(--white-color)"
        textColor="var(--black-color)"
        imageOnRight={false}
      />
    </>
  );
};

export default ExtensionAndCustomize;
