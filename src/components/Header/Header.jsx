import React from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import CustomBtn from "../CustomBtn";

const Header = () => {
  return (
    <header>
      <div>
        <img src="/assets/logo-icon.png" alt="Logo image" />
        <h3>whitepace</h3>
      </div>
      <div className="list-and-btn">
        <ul>
          <li>
            Products <IoIosArrowDown className="icon-style" />
          </li>
          <li>
            Solutions <IoIosArrowDown className="icon-style" />
          </li>
          <li>
            Resources <IoIosArrowDown className="icon-style" />
          </li>
          <li>
            Pricing <IoIosArrowDown className="icon-style" />
          </li>
        </ul>
        <div className="header-btn">
        <CustomBtn text="Login" BgColor="var(--yellow-color)" color="var(--dark-blue-color)" showArrow={false} />
        <CustomBtn text="Try Whitespace free" />
        </div>
      </div>
    </header>
  );
};

export default Header;
