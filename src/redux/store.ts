import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import employeesReducer from "./slices/employeesSlice";
import projectsReducer from "./slices/projectsReducer";
// API
import fetchEmployees from "./api/fetchEmployees";

const reducers = combineReducers({
  auth: authReducer,
  employees: employeesReducer,
  projects: projectsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

// fetchEmployees("8Qf4TBP63tbOA65qkKcndFRZ7vD2");
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
