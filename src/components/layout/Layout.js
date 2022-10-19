import React from "react";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";

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
