import React from "react";
import "./style.css";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="maindiv">{props.children}</div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
