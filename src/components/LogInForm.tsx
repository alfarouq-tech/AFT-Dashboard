import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import BaseInput from "./BaseInput";
import { NavLink } from "react-router-dom";

const LogInForm = () => {
  const initValues = {
    email: "",
    password: "",
  };
  const validation = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email Is Required"),
    password: Yup.string().required("Password Is Required")
  });
  const onSubmit = () => {};
  return (
    <div className="col-12 col-md-6 bg-primary pt-5 d-flex flex-column justify-content-center">
      <h2 className="text-white form-title mb-4">Welcome!</h2>
      <Formik
        initialValues={initValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <div>
          <BaseInput type="text" label="Email" name="email" />
          <BaseInput type="password" label="Password" name="password" />
          <button type="submit" className="submit">Sign In</button>
          <div className="links px-3 d-flex flex-column justify-content-center align-items-start gap-2 mt-3 text-white">
            <NavLink to="/sign-up">Don't have an account</NavLink>
            <NavLink to="/reset-password">Reset Password</NavLink>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default LogInForm;
