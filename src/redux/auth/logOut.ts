import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { auth, signOut } from "../../firebase";
import { RootState } from "../store";
import { LOG_OUT } from "../slices/authSlice";
import Cookies from "js-cookie";

export default (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    await signOut(auth);
    Cookies.remove("auth", { sameSite: "Strict", secure: true });
    dispatch(LOG_OUT());
  };
