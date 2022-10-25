import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../IFs";

interface InitState {
  user: User | null;
  errorMessage: string;
  loading: boolean;
}

const initialState: InitState = {
  user:  null,
  errorMessage: "",
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGN_IN: (state, action: PayloadAction<{user: User | null; errorMessage: string;}>) => {
      if (action.payload.errorMessage.length) {
        state.errorMessage = action.payload.errorMessage;
      } else {
        state.errorMessage = "";
        state.user = action.payload.user;
      }
    },
    LOG_IN: (state, action: PayloadAction<{user: User | null; errorMessage: string;}>) => {
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
    LOADING: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { SIGN_IN, LOG_IN, LOG_OUT, LOADING } = authSlice.actions;
export default authSlice.reducer;
