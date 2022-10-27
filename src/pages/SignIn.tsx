import React from "react";
import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import businessAnalytics from "../images/business_analytics.svg";

const SignIn = ({ auth } : { auth : boolean }) => {
  return auth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <main className="auth container-fluid px-0 ps-md-1">
      <section className="row">
        <div className="d-none col-6 d-md-flex align-items-center">
          <img
            src={businessAnalytics}
            alt="Business Analytics Image"
            className="img-fluid d-block mx-auto"
            loading="lazy"
          />
        </div>
        <SignInForm />
      </section>
    </main>
  );
};

export default SignIn;
