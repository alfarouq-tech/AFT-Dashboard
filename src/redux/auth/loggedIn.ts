import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
// Redux
import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LOADING, LOG_IN, LOG_OUT } from "../slices/authSlice";

export default (): ThunkAction<void, RootState, any, AnyAction> => (dispatch, state) => {
  dispatch(LOADING({ loading: true }));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
      };
      dispatch(LOG_IN({ user: userData, errorMessage: ""}));
      return dispatch(LOADING({ loading: false }));
    }
    dispatch(LOG_OUT());
    return dispatch(LOADING({ loading: false }));
  });
};