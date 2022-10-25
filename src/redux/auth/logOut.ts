import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { auth, signOut } from "../../firebase";
import { RootState } from "../store";
import { LOADING, LOG_OUT } from "../slices/authSlice";

export default (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    dispatch(LOADING({ loading: true }));
    await signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(LOG_OUT());
      dispatch(LOADING({ loading: false }));
    }).catch((error) => {
      // An error happened.
      console.log(error.errorMessage);
      dispatch(LOADING({ loading: false }));
    });
  };
