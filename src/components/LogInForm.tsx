import React, { useEffect, useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Interfaces
import { AuthFields } from "../IFs";
// Redux & Auth
import logInWithEmailAndPassword from "../redux/auth/logInWithEmailAndPassword";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// Formik
import { Formik } from "formik";
import * as Yup from "yup";
// Components
import BaseInput from "./BaseInput";

const LogInForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const resetLoginErrorMessage = () => setLoginErrorMessage("");

  const initValues: AuthFields = {
    email: "",
    password: "",
  };

  const validation = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email Is Required"),
    password: Yup.string().required("Password Is Required"),
  });

  const onSubmit = (values: AuthFields) => dispatch(logInWithEmailAndPassword(values.email, values.password));

  useEffect(() => {
    if (errorMessage === "Firebase: Error (auth/user-not-found).")
      return setLoginErrorMessage("Email is wrong");
    if (errorMessage === "Firebase: Error (auth/wrong-password).")
      return setLoginErrorMessage("Password is wrong");
  }, [errorMessage]);

  return (
    <div className="col-12 col-md-6 bg-primary pt-5 d-flex flex-column justify-content-center">
      <h2 className="text-white form-title mb-4">Welcome!</h2>
      <Formik
        initialValues={initValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div onClick={resetLoginErrorMessage}>
              <BaseInput type="text" label="Email" name="email" />
            </div>
            <div onClick={resetLoginErrorMessage}>
              <BaseInput type="password" label="Password" name="password" />
            </div>
            <span className="error d-block mt-1 ms-3">{loginErrorMessage}</span>
            <button
              type="submit"
              className="submit"
              disabled={
                props.errors.email ||
                props.errors.password
                  ? true
                  : false
              }
            >
              Sign In
            </button>
            <div className="links px-3 d-flex flex-column justify-content-center align-items-start gap-2 mt-3 text-white">
              <Link to="/sign-up">Don't have an account</Link>
              <Link to="/reset-password">Reset Password</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LogInForm;
