import React, { useState, useEffect } from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import CustomBtn from "../CustomBtn";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/assets/logo-icon.png" alt="Logo image" className="logo" />
        <h3 className="brand-name">whitepace</h3>
      </div>

      {/* Navigation */}
      <div className="nav-container">
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
              <li key={item}>
                {item} <IoIosArrowDown className="icon-style" />
              </li>
            ))}
          </ul>

          {/* mobile */}
          {isMobile && (
            <div className="menu-buttons">
              <CustomBtn text="Login" BgColor="var(--yellow-color)" color="var(--dark-blue-color)" showArrow={false} />
              <CustomBtn text="Try Whitespace free" />
            </div>
          )}
        </nav>

        {/*desktop */}
        {!isMobile && (
          <div className="header-btn">
            <CustomBtn text="Login" BgColor="var(--yellow-color)" color="var(--dark-blue-color)" showArrow={false} />
            <CustomBtn text="Try Whitespace free" />
          </div>
        )}

        {/* Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <FiMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
