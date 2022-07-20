import { configureStore } from '@reduxjs/toolkit';
import fetchEmployees from './api/fetchEmployees';
import employeesReducer from "./slices/employeesSlice";
import projectsReducer from './slices/projectsReducer';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    projects: projectsReducer,
  }
});

fetchEmployees("8Qf4TBP63tbOA65qkKcndFRZ7vD2");
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
