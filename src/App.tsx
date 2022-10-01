import React, { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "./redux/hooks";
// CSS
import "./css/index.css";
// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import ProtectedRoutes from "./components/ProtectedRoutes";
// Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import OurClients from "./pages/OurClients";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Cookies from "js-cookie";
import SignUp from "./pages/SignUp";

const App = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [auth, setAuth] = useState<boolean>(Cookies.get("auth") ? true : false);

  const readCookies = () => {
    const isLoggedIn = Cookies.get("auth");
    
    if (isLoggedIn && !auth) {
      return setAuth(true);
    } else if (user === null) {
      return setAuth(false);
    }
  };

  useEffect(() => readCookies(), [user]);

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
