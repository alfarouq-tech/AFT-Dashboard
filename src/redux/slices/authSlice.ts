import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../IFs";

interface InitState {
  user: User | null;
  errorMessage: string;
  resetEmailSentMessage: string;
  loading: boolean;
}

const initialState: InitState = {
  user: null,
  errorMessage: "",
  resetEmailSentMessage: "",
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGN_IN: (
      state,
      action: PayloadAction<{ user: User | null; errorMessage: string }>
    ) => {
      if (action.payload.errorMessage.length) {
        state.errorMessage = action.payload.errorMessage;
      } else {
        state.errorMessage = "";
        state.user = action.payload.user;
      }
    },
    LOG_IN: (
      state,
      action: PayloadAction<{ user: User | null; errorMessage: string }>
    ) => {
      if (action.payload.errorMessage.length) {
        state.errorMessage = action.payload.errorMessage;
      } else {
        state.errorMessage = "";
        state.user = action.payload.user;
      }
    },
    LOG_OUT: (state) => {
      state.user = null;
    },
    CLEAR_ERROR_MESSAGE: (state) => {
      state.errorMessage = "";
      state.resetEmailSentMessage = "";
    },
    LOADING: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    RESET_EMAIL_SENT: (state, action: PayloadAction<string>) => {
      state.resetEmailSentMessage = action.payload;
    },
  },
});

export const {
  SIGN_IN,
  LOG_IN,
  LOG_OUT,
  CLEAR_ERROR_MESSAGE,
  LOADING,
  RESET_EMAIL_SENT,
} = authSlice.actions;
export default authSlice.reducer;
