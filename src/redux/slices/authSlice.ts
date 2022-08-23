import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface InitState {
  user: unknown;
  errorMessage: string;
}

const initialState: InitState = {
  user: null,
  errorMessage: "",
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
      }
    },
    LOG_OUT: (state) => {
      state.user = null;
    },
  },
});

export const { LOG_IN, LOG_OUT } = authSlice.actions;
export default authSlice.reducer;