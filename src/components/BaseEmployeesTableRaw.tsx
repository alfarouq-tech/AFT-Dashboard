import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import maskNumber from "../helpers/maskNumber";
import { Employee } from "../IFs";
// Redux
import { useAppDispatch } from "../redux/hooks";
import { deleteEmployee, editEmployee } from "../redux/slices/employeesSlice";
import BaseEditRemoveRaw from "./BaseEditRemoveRaw";

interface Props {
  employee: Employee;
}

const BaseEmployeesTableRaw = ({ employee }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);
  const [employeeData, setEmployeeData] = useState<Employee>(employee);
  const dispatch = useAppDispatch();
  const handleVal = (e: SyntheticEvent, input: string) => {
    const target = e.target as HTMLInputElement;
    setEmployeeData({ ...employeeData, [input]: target.value });
  };
  const saveChanges = () => {
    dispatch(editEmployee(employeeData));
    setEditable(!editable);
  };

  useEffect(() => {
    const nameInput = nameInputRef.current;

    if (nameInput) return nameInput.focus();
  }, [editable]);

  return (
    <tr>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.name}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "name")}
          ref={nameInputRef}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.position}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "position")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.age}
          disabled={!editable}
          className="field"
          onInput={(e) => maskNumber(e, employeeData, setEmployeeData, "age")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.start_date}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "start_date")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.salary}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "salary")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.status}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "status")}
        />
      </td>
      <BaseEditRemoveRaw
        id={employeeData.id}
        editable={editable}
        setEditable={setEditable}
        deleteEmployee={(id) => dispatch(deleteEmployee(id))}
        save={saveChanges}
      />
    </tr>
  );
};

export default BaseEmployeesTableRaw;
