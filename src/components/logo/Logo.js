import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/">Saksham Hadokar</Link>
    </div>
  );
};

export default Logo;
