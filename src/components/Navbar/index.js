import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
