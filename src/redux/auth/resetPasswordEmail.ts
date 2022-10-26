import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { sendPasswordResetEmail, auth } from "../../firebase";
import { RESET_EMAIL_SENT } from "../slices/authSlice";
import { RootState } from "../store";

export default (email: string): ThunkAction<void, RootState, any, AnyAction> =>
  async (dispatch, action) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        dispatch(RESET_EMAIL_SENT("Password reset email sent!"));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(RESET_EMAIL_SENT(errorMessage));
      });
  };
