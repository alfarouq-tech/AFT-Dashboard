import React, { memo, useCallback, useEffect, useState } from "react";
// Redux & Auth
import resetPasswordEmail from "../redux/auth/resetPasswordEmail";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// Formik
import { Formik } from "formik";
import * as Yup from "yup";
// Components
import BaseInput from "./BaseInput";
import { Link } from "react-router-dom";
import { CLEAR_ERROR_MESSAGE } from "../redux/slices/authSlice";

const ResetFrom = () => {
  const dispatch = useAppDispatch();
  const resetMessage = useAppSelector(
    (state) => state.auth.resetEmailSentMessage
  );
  const [emailSentMessage, setEmailSentMessage] = useState(resetMessage);

  const initValues: { email: string } = {
    email: "",
  };

  const validation = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email Is Required"),
  });

  useEffect(() => {
    if (resetMessage === "Firebase: Error (auth/user-not-found).") {
      return setEmailSentMessage("User not found.");
    }
    setEmailSentMessage(resetMessage);
  }, [resetMessage]);

  const onSubmit = ({ email }: { email: string }) =>
    dispatch(resetPasswordEmail(email));

  return (
    <div className="col-12 col-md-6 bg-primary d-flex flex-column justify-content-center">
      <div className="col-10 mx-auto col-md-12">
        <h1 className="text-white form-title fs-1 px-1 main-font-family text-break">
          Forgot Password!
        </h1>
        <p className="text-white px-2 text-break">
          We will send you an email to reset your password.
        </p>
      </div>
      <Formik
        initialValues={initValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ errors, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="col-10 mx-auto col-md-12">
            <div role="button" onClick={() => dispatch(CLEAR_ERROR_MESSAGE())}>
              <BaseInput type="text" label="Your Email" name="email" />
            </div>
            <span className="d-block error px-3">{emailSentMessage}</span>
            <button
              type="submit"
              className="submit"
              disabled={errors.email || !values.email.length || emailSentMessage.length ? true : false}
            >
              Send reset code
            </button>
            <div className="links px-3 d-flex flex-column justify-content-center align-items-start gap-2 mt-3 text-white">
              <Link to="/login">Go to sign in page</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ResetFrom;
