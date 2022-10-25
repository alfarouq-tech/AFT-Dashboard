import React, { useEffect, useState } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import loggedIn from "./redux/auth/loggedIn";
// CSS
import "./css/index.css";
// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import ProtectedRoutes from "./components/ProtectedRoutes";
import Loading from "./components/Loading";
// Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import OurClients from "./pages/OurClients";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    dispatch(loggedIn());
  }, []);

  useEffect(() => {
    setAuth(() => user ? true : false);
    console.log(user)
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes auth={auth} />}>
          <Route path="" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="our-clients" element={<OurClients />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/login" element={<LogIn auth={auth} />} />
        <Route path="/sign-up" element={<SignUp auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
