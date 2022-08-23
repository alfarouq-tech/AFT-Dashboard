import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { RootState } from "../store";
import { LOG_IN } from "../slices/authSlice";
import Cookies from "js-cookie";

export default (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.toJSON();
        const in30Minutes = new Date(new Date().getTime() + 30 * 60 * 1000);
        dispatch(
          LOG_IN({ user, errorMessage: "" })
        );
        Cookies.set("auth", "True", { expires: in30Minutes, sameSite: "Strict",  secure: true });
      })
      .catch((error) => {
        dispatch(LOG_IN({ user: null, errorMessage: "" }));
        dispatch(LOG_IN({ user: null, errorMessage: error.message }));
      });
  };
