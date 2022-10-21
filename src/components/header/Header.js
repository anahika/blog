import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/post">Posts</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </nav>
      <div>
        <a href="/" className="youtube social" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="/" className="facebook social" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/" className="twitter social" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com/thymistyroom?igshid=YmMyMTA2M2Y="
          className="instagram social"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </header>
  );
};

export default Header;
