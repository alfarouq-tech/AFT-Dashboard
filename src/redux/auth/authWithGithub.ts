import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { auth, githubProvider, signInWithPopup } from "../../firebase";
import { LOADING, LOG_IN } from "../slices/authSlice";

export default (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    dispatch(LOADING({ loading: true }));
    await signInWithPopup(auth, githubProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
      }; 
      dispatch(LOG_IN({ user: userData, errorMessage: "" }));
      dispatch(LOADING({ loading: false }));
    }).catch((error) => {
      dispatch(LOG_IN({ user: null, errorMessage: "" }));
      dispatch(LOG_IN({ user: null, errorMessage: error.message }));
      dispatch(LOADING({ loading: false }));
    });
  }