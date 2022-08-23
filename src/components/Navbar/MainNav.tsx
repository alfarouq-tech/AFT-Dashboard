import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Redux & Auth
import { useAppDispatch } from "../../redux/hooks";
import logOut from "../../redux/auth/logOut";
// Router
import { Link, useNavigate } from "react-router-dom";
// Icons
import { AiFillDashboard, AiFillProject } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

const MainNav = React.forwardRef(
  (
    props: {
      navbarToggle: () => void;
      hiddenClass: string;
    },
    ref: React.Ref<HTMLUListElement>
  ) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logout = () => {
      dispatch(logOut());
      navigate("/login", { replace: true });
    }
  
    return (
      <ul
        className={`nav nav-pills flex-column fs-6 mt-5 align-self-center ${props.hiddenClass}`}
        ref={ref}
      >
        <li className="nav-item my-2">
          <div
            onClick={props.navbarToggle}
            onKeyPress={props.navbarToggle}
            role="button"
            tabIndex={0}
          >
            <Link to="/" className="d-flex align-items-center">
              <AiFillDashboard />
              Dashboard
            </Link>
          </div>
        </li>
        <li className="nav-item my-2">
          <div
            onClick={props.navbarToggle}
            onKeyPress={props.navbarToggle}
            role="button"
            tabIndex={0}
          >
            <Link to="/projects" className="d-flex align-items-center">
              <AiFillProject />
              Projects
            </Link>
          </div>
        </li>
        <li className="nav-item my-2">
          <div
            onClick={props.navbarToggle}
            onKeyPress={props.navbarToggle}
            role="button"
            tabIndex={0}
          >
            <Link to="/our-clients" className="d-flex align-items-center">
              <BsFillPeopleFill />
              Our Clients
            </Link>
          </div>
        </li>
        <li className="nav-item my-2">
          <div
            onClick={props.navbarToggle}
            onKeyPress={props.navbarToggle}
            role="button"
            tabIndex={0}
          >
            <Link to="/profile" className="d-flex align-items-center">
              <CgProfile />
              Profile
            </Link>
          </div>
        </li>
        <hr />
        <li className="nav-item my-2">
          <div
            onClick={props.navbarToggle}
            onKeyPress={props.navbarToggle}
            role="button"
            tabIndex={0}
          >
            <button type="button" className="btn d-flex align-items-center" onClick={logout}>
              <BiLogOut />
              Log-Out
            </button>
          </div>
        </li>
      </ul>
    );
  }
);

export default MainNav;
