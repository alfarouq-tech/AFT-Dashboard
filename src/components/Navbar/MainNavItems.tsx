import React from "react";
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

interface Item {
  name: string;
  url: string;
  icon: JSX.Element;
}

const MainNavItems = React.memo(
  (props: { navbarToggle: () => void; navClosed: boolean }) => {
    const items: Item[] = [
      {
        name: "Dashboard",
        url: "/",
        icon: <AiFillDashboard />,
      },
      {
        name: "Projects",
        url: "/projects",
        icon: <AiFillProject />,
      },
      {
        name: "Employees",
        url: "/employees",
        icon: <AiFillDashboard />,
      },
      {
        name: "Our Clients",
        url: "/our-clients",
        icon: <BsFillPeopleFill />,
      },
      {
        name: "Profile",
        url: "/profile",
        icon: <CgProfile />,
      },
    ];
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logout = () => {
      dispatch(logOut());
      navigate("/login", { replace: true });
    };

    return (
      <ul className="nav nav-pills flex-column fs-6 mt-5 align-self-center">
        {items.map((item) => (
          <li className="nav-item my-2" title={item.name}>
            <button
              type="button"
              className="btn"
              onClick={() => props.navClosed && props.navbarToggle}
            >
              <Link
                to={item.url}
                className={`d-flex align-items-center ${
                  props.navClosed ? "justify-content-center" : ""
                }`}
              >
                {item.icon}
                <span className={props.navClosed ? "hidden d-none" : ""}>
                  {item.name}
                </span>
              </Link>
            </button>
          </li>
        ))}
        <hr />
        <li className="nav-item my-2">
          <button
            type="button"
            className="btn d-flex align-items-center"
            onClick={logout}
          >
            <BiLogOut />
            <span className={props.navClosed ? "hidden d-none" : ""}>
              Log-Out
            </span>
          </button>
        </li>
      </ul>
    );
  }
);

export default MainNavItems;
