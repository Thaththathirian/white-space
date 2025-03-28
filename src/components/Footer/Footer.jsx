import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import CustomBtn from "../common/CustomBtn";
import { IoIosArrowDown } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Overview", path: "#" },
      { name: "Pricing", path: "#" },
      { name: "Customer stories", path: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", path: "#" },
      { name: "Guides & tutorials", path: "#" },
      { name: "Help center", path: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Media kit", path: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/*Logo & About */}
        <div className="footer-logo">
          <div className="logo-and-brand">
            <img
              src="/assets/logo-icon.png"
              alt="Logo"
              className="footer-logo-img"
            />
            <h3 className="footer-brand-name">Whitespace</h3>
          </div>
          <p className="footer-about">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <p className="footer-title">{section.title}</p>
              <ul className="footer-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="footer-cta">
          <h5 className="cta-title">Try It Today</h5>
          <p className="cta-text">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <CustomBtn text="Start today" className="cta-button" />
        </div>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <div className="bottom-link bottom-lang">
            <TfiWorld className="icon-style" />
            <p>English</p>
            <IoIosArrowDown className="icon-style" />
          </div>
          <Link to="#" className="bottom-link">
            Terms & Privacy
          </Link>
          <Link to="#" className="bottom-link">
            Security
          </Link>
          <Link to="#" className="bottom-link">
            Status
          </Link>
          <p className="copyright">&copy; 2025 Whitespace LLC</p>
        </div>
        <div className="footer-social">
          <Link to="#">
            <FaFacebookF className="social-icon" />
          </Link>
          <Link to="#">
            <FaTwitter className="social-icon" />
          </Link>
          <Link to="#">
            <FaLinkedinIn className="social-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
