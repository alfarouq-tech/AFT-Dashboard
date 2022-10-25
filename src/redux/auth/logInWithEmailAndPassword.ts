import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { RootState } from "../store";
import { LOADING, LOG_IN } from "../slices/authSlice";

export default (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    dispatch(LOADING({ loading: true }));
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
        };
        dispatch(
          LOG_IN({ user: userData, errorMessage: "" })
        );
        dispatch(LOADING({ loading: false }));
      })
      .catch((error) => {
        dispatch(LOG_IN({ user: null, errorMessage: "" }));
        dispatch(LOG_IN({ user: null, errorMessage: error.message }));
        dispatch(LOADING({ loading: false }));
      });
  };
