import React from "react";
import './your-work.css'
import CustomBtn from "../CustomBtn";

const YourWork = () => {
  return (
    <div className="your-work">
      <h1>Your work, everywhere you are</h1>
      <p>
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <CustomBtn text="Try Taskey" />
    </div>
  );
};

export default YourWork;