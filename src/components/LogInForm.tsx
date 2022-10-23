import React, { useEffect, useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Interfaces
import { AuthFields } from "../IFs";
// Redux & Auth
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import logInWithEmailAndPassword from "../redux/auth/logInWithEmailAndPassword";
// Formik
import { Formik } from "formik";
import * as Yup from "yup";
// Components
import BaseInput from "./BaseInput";
import BaseAuthWith from "./BaseAuthWith";

const LogInForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  const [passwordFieldType, setPasswordFieldType] = useState("password");
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

  const onSubmit = (values: AuthFields) =>
    dispatch(logInWithEmailAndPassword(values.email, values.password));

  const togglePassword = () =>
    passwordFieldType === "password"
      ? setPasswordFieldType("text")
      : setPasswordFieldType("password");

  useEffect(() => {
    if (errorMessage === "Firebase: Error (auth/user-not-found).")
      return setLoginErrorMessage("Email is wrong");
    if (errorMessage === "Firebase: Error (auth/wrong-password).")
      return setLoginErrorMessage("Password is wrong");
    if (
      errorMessage ===
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
    )
      return setLoginErrorMessage(
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
      );
  }, [errorMessage]);

  return (
    <div className="col-12 col-md-6 bg-primary pt-md-5 d-flex flex-column justify-content-center">
      <h2 className="text-white form-title mb-4 col-10 mx-auto col-md-12">
        Welcome!
      </h2>
      <Formik
        initialValues={initValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="col-10 mx-auto col-md-12"
          >
            <div onClick={resetLoginErrorMessage}>
              <BaseInput type="text" label="Email" name="email" />
            </div>
            <div onClick={resetLoginErrorMessage}>
              <BaseInput
                type={passwordFieldType}
                label="Password"
                name="password"
                togglePassword={togglePassword}
              />
            </div>
            <span className="error d-block mt-1 ms-3">{loginErrorMessage}</span>
            <button
              type="submit"
              className="submit"
              disabled={
                props.errors.email || props.errors.password || loginErrorMessage
                  ? true
                  : false
              }
            >
              Sign In
            </button>
            <BaseAuthWith title="Sign In With:"/>
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
