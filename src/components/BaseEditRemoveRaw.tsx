import React from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";

interface Props {
  id: number;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  deleteEmployee(arg0: number): void;
  save(): void;
}

const BaseEditRemoveRaw = ({
  id,
  editable,
  setEditable,
  deleteEmployee,
  save,
}: Props) => {
  return (
    <td className="pe-2">
      <BiTrash
        type="button"
        className="btn btn-danger p-1 fs-3 d-inline-block"
        onClick={() => deleteEmployee(id)}
        onKeyPress={(e) => e.key === "Enter" && deleteEmployee(id)}
        tabIndex={0}
      />
      <BiEdit
        type="button"
        className={`btn btn-warning p-1 fs-3 ${
          editable ? "d-none" : "d-inline-block ms-3"
        }`}
        onClick={() => setEditable(!editable)}
        onKeyPress={(e) => e.key === "Enter" && setEditable(!editable)}
        tabIndex={0}
      />
      <BiSave
        type="button"
        className={`btn btn-success p-1 fs-3 ${
          editable ? "d-inline-block ms-3" : "d-none"
        }`}
        onClick={save}
        onKeyPress={(e) => e.key === "Enter" && save()}
        tabIndex={0}
      />
    </td>
  );
};

export default BaseEditRemoveRaw;
