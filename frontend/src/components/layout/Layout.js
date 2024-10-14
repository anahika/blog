import React from "react";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="layout-div">
        <div className="maindiv">{props.children}</div>
        <div className="sidebar">
          <Sidebar blogs={props.blogs} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
