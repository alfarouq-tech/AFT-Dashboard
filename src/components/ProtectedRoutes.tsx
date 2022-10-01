import React from "react";
// React Router
import { Navigate, Outlet } from "react-router-dom";
// Components
import SideNavbar from "./SideNavbar";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../helpers/ScrollToTopOnMount";

const ProtectedRoutes = ({ auth }: { auth: boolean }) => {
  return auth ? (
    <div className="container-fluid d-flex p-0">
      <ScrollToTop />
      <SideNavbar />
      <div className="col-sm-11 col-10">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoutes;
