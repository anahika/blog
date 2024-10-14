import React from "react";
import error from "../../assets/loading.png";

export const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column p-3 bg-light mt-3 m-auto">
      <img src={error} alt="error" style={{ width: "100px" }} />
      <p className="mt-3 text-center text-primary">
        Lord, grant me patience, but please hurry!
      </p>
    </div>
  );
};
