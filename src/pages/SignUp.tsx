import React from "react";
import { Navigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import SignUpImage from "../images/sign_up.svg";

const SignUp = ({ auth }: { auth: boolean }) => {
  return auth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <main className="auth container-fluid px-0 ps-md-1">
      <section className="row">
        <div className="d-none col-6 d-md-flex align-items-center">
          <img
            src={SignUpImage}
            alt="Business Analytics Image"
            className="img-fluid d-block mx-auto"
            loading="lazy"
          />
        </div>
        <SignUpForm />
      </section>
    </main>
  );
};

export default SignUp;
