import React from "react";
import "./layout.css";
import Header from "../Header/Header";
import HeroSection from "../Section/HeroSection";
import WorkManagement from "../WorkManagement/WorkManagement";
import ExtensionAndCustomize from "../ExtensionAndCustomize/ExtensionAndCustomize";
import Pricing from "../Pricing/Pricing";
import YourWork from "../YourWork/YourWork";
import YourData from "../YourData/YourData";
import Footer from "../Footer/Footer";
import FreeTrial from "../FreeTrial/FreeTrial";
import Apps from "../Apps/Apps";
import Sponsors from "../Sponsors/Sponsors";
import Testimonial from "../Testimonial/Testimonial";

const Layout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WorkManagement />
      <ExtensionAndCustomize />
      <Pricing />
      <YourWork />
      <YourData />
      <Sponsors />

      <Apps />

      {/* <Testimonial /> */}
      <FreeTrial />
      <Footer />
    </>
  );
};

export default Layout;
