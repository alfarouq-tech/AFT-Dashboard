import React, { memo, useEffect, useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Interfaces
import { AuthFields } from "../IFs";
// Redux & Auth
import signUpWithEmailAndPassword from "../redux/auth/signUpWithEmailAndPassword";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// Formik
import { Formik } from "formik";
import * as Yup from "yup";
// Components
import BaseInput from "./BaseInput";
import BaseAuthWith from "./BaseAuthWith";

const LogInForm = memo(() => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [passwordFieldType, setPasswordFieldType] = useState("password");
  const [confirmPasswordFieldType, setConfirmPasswordFieldType] =
    useState("password");

  const resetSignUpErrorMessage = () => setSignUpErrorMessage("");

  const initValues: AuthFields = {
    email: "",
    password: "",
    confirm_password: "",
  };

  const validation = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email Is Required"),
    password: Yup.string()
      .required("Please, enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirm_password: Yup.string()
      .label("Password Confirm")
      .required("Please, confirm your password")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const onSubmit = (values: AuthFields) =>
    dispatch(signUpWithEmailAndPassword(values.email, values.password));

  const togglePassword = () =>
    passwordFieldType === "password"
      ? setPasswordFieldType("text")
      : setPasswordFieldType("password");
  const toggleConfirmPassword = () =>
    confirmPasswordFieldType === "password"
      ? setConfirmPasswordFieldType("text")
      : setConfirmPasswordFieldType("password");

  useEffect(() => {
    return setSignUpErrorMessage(errorMessage);
  }, [errorMessage]);

  return (
    <div className="col-12 col-md-6 bg-primary pt-5 d-flex flex-column justify-content-center">
      <h2 className="text-white form-title mb-4">Join Us Now!</h2>
      <Formik
        initialValues={initValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div onClick={resetSignUpErrorMessage}>
              <BaseInput type="text" label="Email" name="email" />
            </div>
            <div onClick={resetSignUpErrorMessage}>
              <BaseInput
                type={passwordFieldType}
                label="Password"
                name="password"
                togglePassword={togglePassword}
              />
            </div>
            <div onClick={resetSignUpErrorMessage}>
              <BaseInput
                type={confirmPasswordFieldType}
                label="Confirm Password"
                name="confirm_password"
                togglePassword={toggleConfirmPassword}
              />
            </div>
            <span className="error d-block mt-1 ms-3">
              {signUpErrorMessage}
            </span>
            <button
              type="submit"
              className="submit"
              disabled={
                errors.email ||
                errors.password ||
                errors.confirm_password ||
                signUpErrorMessage
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
            <BaseAuthWith title="Sign Up With:"/>
            <div className="links px-3 d-flex flex-column justify-content-center align-items-start gap-2 mt-3 text-white">
              <Link to="/login">Already have an account</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
});

export default LogInForm;
