import React from "react";
import { Navigate } from "react-router-dom";
// Images
import resetImage from "../images/reset.svg";
// Components
import ResetForm from "../components/ResetForm";

const ResetPassword = ({ auth }: { auth: boolean }) => {
  return auth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <main className="auth container-fluid px-0 ps-md-1">
      <section className="row">
        <div className="d-none col-6 d-md-flex align-items-center">
          <img
            src={resetImage}
            alt="Business Analytics Image"
            className="img-fluid d-block mx-auto"
            loading="lazy"
          />
        </div>
        <ResetForm />
      </section>
    </main>
  );
};

export default ResetPassword;
