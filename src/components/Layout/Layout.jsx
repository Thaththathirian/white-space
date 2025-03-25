import React from "react";
import "./layout.css";
import Header from "../Header/Header";
import HeroSection from "../Section/HeroSection";
import WorkManagement from "../WorkManagement/WorkManagement";
import Extension from "../ExtensionAndCustomize/Extension";
import Customization from "../ExtensionAndCustomize/Customization";
import Pricing from "../Pricing/Pricing";
import YourWork from "../YourWork/YourWork";
import YourData from "../YourData/YourData";

const Layout = () => {
  return (
    <div className="container grid">
      <div className="spiral">
        <div className="layout1">
          <Header />
          <HeroSection />
        </div>
      </div>
      <div className="layout2">
        <WorkManagement />
      </div>
      <div className="layout3">
        <Extension />
      </div>
      <div className="layout4">
        <Customization />
      </div>
      <div className="layout5">
        <Pricing />
      </div>
      <div className="layout6">
        <YourWork />
      </div>
      <div className="layout7">
        <YourData/>
      </div>
    </div>
  );
};

export default Layout;
