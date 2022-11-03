import React, { useRef, memo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Icons
import { BiWorld } from "react-icons/bi";
// Router
import { useNavigate } from "react-router-dom";
// Components
import TogglerIcon from "./Navbar/TogglerIcon";
import MainNavItems from "./Navbar/MainNavItems";

function SideNavbar() {
  const navbarContainerRef = useRef<HTMLUListElement>(null);
  const [navClosed, setNavClosed] = useState(true);
  const navigate = useNavigate();

  // Toggle Navbar
  const navbarToggle = () => {
    const navbar = navbarContainerRef.current;
    const toggleList: string[] = [
      "close",
      "col-xl-2",
      "col-lg-3",
      "col-md-4",
      "col-sm-4",
      "col-12",
    ];
    if (navbar)
      toggleList.map((item: string) => {
        navbar.classList.toggle(item);
      });
    setNavClosed(!navClosed);
  };

  const goHome = () => {
    navbarToggle();
    navigate("/");
  };

  return (
    <nav
      className="bg-light navbar-light d-flex flex-column
      align-items-center px-1 py-5 col-sm-1 col-2 close"
      style={{ zIndex: 10 }}
      ref={navbarContainerRef}
    >
      <TogglerIcon navbarToggle={navbarToggle} />
      <button
        type="button"
        className="btn navbar-logo d-flex align-items-center justify-content-center"
        onClick={goHome}
      >
        <BiWorld />
        <span className="mb-0 mx-1">ALFAROUQ</span>
      </button>
      <MainNavItems navClosed={navClosed} navbarToggle={navbarToggle} />
    </nav>
  );
}

export default memo(SideNavbar);
