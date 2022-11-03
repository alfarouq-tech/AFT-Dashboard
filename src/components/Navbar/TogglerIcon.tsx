import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  navbarToggle(): void;
}

function TogglerIcon({ navbarToggle }: Props) {
  return (
    <>
      <button
        className="btn navbar-toggler"
        onClick={navbarToggle}
      >
        <span className="navbar-toggler-icon" aria-hidden="true" />
      </button>
      <button
        className="btn close-icon"
        onClick={navbarToggle}
      >
        <AiFillCloseCircle />
      </button>
    </>
  );
}

export default TogglerIcon;
