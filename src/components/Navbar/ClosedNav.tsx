import React from "react";
// React Router
import { Link } from "react-router-dom";
// Icons
import { AiFillDashboard, AiFillProject } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
// Redux
import { useAppDispatch } from "../../redux/hooks";
import logOut from "../../redux/auth/logOut";

const ClosedNav = React.forwardRef(
  (props, ref: React.Ref<HTMLUListElement>) => {
    const dispatch = useAppDispatch();
    const logout = () => dispatch(logOut());

    return (
      <ul className="nav flex-column closed-nav" ref={ref}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <AiFillDashboard title="Dashboard" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <AiFillProject title="Projects" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/our-clients" className="nav-link">
            <BsFillPeopleFill title="Our Clients" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <CgProfile title="Profile" />
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" className="btn nav-link" onClick={logout}>
            <BiLogOut title="Log-Out" />
          </button>
        </li>
      </ul>
    );
  }
);

export default ClosedNav;
