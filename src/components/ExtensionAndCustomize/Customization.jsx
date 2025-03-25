import React from "react";
import CustomBtn from "../CustomBtn";

const Customization = () => {
  return (
    <div className="customize-needs">
      <div className="customize-needs-blank"></div>
      <div className="customize-needs-content">
        <h1>Customise it to your needs</h1>
        <p>
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <CustomBtn text="Let's Go" />
      </div>
    </div>
  );
};

export default Customization;
