import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface InitState {
  user: unknown;
  errorMessage: string;
  isLoggedIn: boolean;
}

const initialState: InitState = {
  user: null,
  errorMessage: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOG_IN: (
      state,
      action: PayloadAction<{ user: any; errorMessage: string }>
    ) => {
      if (action.payload.errorMessage.length) {
        state.errorMessage = action.payload.errorMessage;
      } else {
        state.errorMessage = "";
        state.user = action.payload.user;
        state.isLoggedIn = true;
      }
    },
    LOG_OUT: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { LOG_IN, LOG_OUT } = authSlice.actions;
export default authSlice.reducer;
