import React from "react";
import { Navigate } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import businessAnalytics from "../images/business_analytics.svg";

const LogIn = ({ auth } : { auth : boolean }) => {
  return auth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <main className="login container-fluid px-0 ps-md-1">
      <section className="row">
        <div className="d-none col-6 d-md-flex align-items-center">
          <img
            src={businessAnalytics}
            alt="Business Analytics Image"
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <LogInForm />
      </section>
    </main>
  );
};

export default LogIn;
