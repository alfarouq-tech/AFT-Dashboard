import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import { RootState } from "../store";
import { SIGN_IN } from "../slices/authSlice";
import Cookies from "js-cookie";

export default (
    email: string,
    password: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.toJSON();
        const in30Minutes = new Date(new Date().getTime() + 30 * 60 * 1000);
        dispatch(
          SIGN_IN({ user, errorMessage: "" })
        );
        Cookies.set("auth", "True", { expires: in30Minutes, sameSite: "Strict",  secure: true });
      })
      .catch((error) => {
        dispatch(SIGN_IN({ user: null, errorMessage: "" }));
        dispatch(SIGN_IN({ user: null, errorMessage: error.message }));
      });
  };
