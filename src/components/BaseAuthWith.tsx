import React from "react";
// Redux & Auth
import { useAppDispatch } from "../redux/hooks";
import authWithGoogle from "../redux/auth/authWithGoogle";
// Images
import googleIcon from "../images/google.svg";
import githubIcon from "../images/github.svg";
import authWithGithub from "../redux/auth/authWithGithub";

const BaseAuthWith = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span className="text-white text-center fs-4 d-block or-separator">
        Or
      </span>
      <h2 className="text-white fs-5 my-4 px-3 main-font-family">{title}</h2>
      <div className="d-flex align-items-center gap-3 mt-3 px-3 w-50">
        <button
          type="button"
          className="btn p-0"
          onClick={() => dispatch(authWithGoogle())}
        >
          <img
            src={googleIcon}
            alt="google singing icon"
            title="singing with google"
            className="singing-icon"
          />
        </button>
        <button
          type="button"
          className="btn p-0"
          onClick={() => dispatch(authWithGithub())}
        >
          <img
            src={githubIcon}
            alt="github singing icon"
            title="singing with github"
            className="singing-icon"
          />
        </button>
      </div>
      <hr className="mx-3 my-4 text-muted" />
    </>
  );
};

export default BaseAuthWith;
