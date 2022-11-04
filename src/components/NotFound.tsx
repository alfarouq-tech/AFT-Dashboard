import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../images/not_found.svg";

const NotFound = () => (
  <main className="container-fluid px-0 ps-md-1">
    <div className="d-flex align-items-center justify-content-center">
      <img
        src={NotFoundImage}
        alt="Business Analytics Image"
        className="img-fluid"
        loading="lazy"
      />
    </div>
    <h1 className="text-center text-dark">There's nothing here!</h1>
    <Link to="/" className="text-center main-font-family fs-4 nav-link">
      Go to the dashboard.
    </Link>
  </main>
);

export default NotFound;
