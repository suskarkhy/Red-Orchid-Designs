import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo-2.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 700) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "gpt3__navbar active" : "gpt3__navbar"}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <img alt="Red Orchid Designs" src={logo} />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Red Orchid Designs</Link>
          </p>
          <p>
            <Link to="/projects">Our Projects</Link>
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
        </div>
      </div>
      <div className="">
        {/* <RiMenu3Line color="#fff" size={27} /> */}
        {/* <p >fcwv</p> */}
        <div
          id="nav-icon1"
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`${toggleMenu ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/" className="remove-link">
                  Red Orchid Designs
                </Link>
              </p>
              <p>
                <Link to="/projects" className="remove-link">
                  Our Projects
                </Link>
              </p>
              <p>
                <Link to="/about" className="remove-link">
                  About Us
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
