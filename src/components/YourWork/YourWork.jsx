import React from "react";
import './your-work.css'
import CustomBtn from "../CustomBtn";

const YourWork = () => {
  return (
    <div className="your-work">
      <h1 className="your-work-title">Your work, everywhere you are</h1>
      <p className="your-work-desc">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <CustomBtn text="Try Taskey" className="your-work-btn"/>
    </div>
  );
};

export default YourWork;