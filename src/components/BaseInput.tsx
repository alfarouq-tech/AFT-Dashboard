import React from "react";
import { Field, ErrorMessage } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props {
  name: string;
  label: String;
  type: String;
  togglePassword?: () => void;
}

const BaseInput = ({ name, label, type, togglePassword }: Props) => {
  return (
    <div className="form-control d-flex flex-column">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <div className="position-relative w-75">
        <Field type={type} id={name} name={name} className="w-100" />
        {(name === "password" || name === "confirm_password") && (
          <>
            {type === "text" && (
              <AiFillEye
                role="button"
                className="position-absolute top-50 end-0 translate-middle fs-5 cursor-pointer"
                onClick={togglePassword}
              />
            )}
            {type === "password" && (
              <AiFillEyeInvisible
                role="button"
                className="position-absolute top-50 end-0 translate-middle fs-5 cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </>
        )}
      </div>
      <ErrorMessage component="span" className="error" name={name} />
    </div>
  );
};
export default BaseInput;
