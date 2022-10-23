import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { auth, googleProvider, GoogleAuthProvider, signInWithPopup } from "../../firebase";
import { LOG_IN } from "../slices/authSlice";
import Cookies from "js-cookie";

export default (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, state) =>
    await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential && credential.accessToken;
      const in30Minutes = new Date(new Date().getTime() + 30 * 60 * 1000);
      Cookies.set("auth", token ? token : "", { expires: in30Minutes, sameSite: "Strict",  secure: true });
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      dispatch(LOG_IN({ user, errorMessage: "" }));
    }).catch((error) => {
      dispatch(LOG_IN({ user: null, errorMessage: "" }));
      dispatch(LOG_IN({ user: null, errorMessage: error.message }));
    });