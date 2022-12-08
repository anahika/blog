import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.jpeg";

export const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column p-3 bg-light mt-3 m-auto">
      <img src={error} alt="error" style={{ width: "300px" }} />
      <p className="mt-3 text-center text-primary">
        Unfortunately, this page does not exist. Please check the URL or return
        to Home Page.
      </p>
      <Link to="/" className="btn btn-secondary mt-3">
        GO HOME
      </Link>
    </div>
  );
};
