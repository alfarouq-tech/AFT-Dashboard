import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import employeesReducer from "./slices/employeesSlice";
import projectsReducer from "./slices/projectsReducer";
// Redux Persist
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
// API
import fetchEmployees from "./api/fetchEmployees";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const authPersist = {
  key: "auth",
  storage,
  blacklist: ["errorMessage"],
}

const reducers = combineReducers({
  auth: persistReducer(authPersist, authReducer),
  employees: employeesReducer,
  projects: projectsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);

// fetchEmployees("8Qf4TBP63tbOA65qkKcndFRZ7vD2");
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
