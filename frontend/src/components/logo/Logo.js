import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/">Nomadic Blogs</Link>
    </div>
  );
};

export default Logo;
