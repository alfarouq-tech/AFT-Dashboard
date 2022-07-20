import React, { SyntheticEvent } from "react";
import { Employee } from "../IFs";

let oldValue: string = "";
let firstEdit: boolean = true;

const maskNumber = (
  e: SyntheticEvent,
  employeeData: Employee,
  setEmployeeData: React.Dispatch<React.SetStateAction<Employee>>,
  inputName: string
) => {
  const input = e.target as HTMLInputElement;
  const inputValue = input.value;
  const valid = /^-?\d*$/.test(input.value);
  if (firstEdit && !valid) {
    for (let i = 0; i < input.value.length - 1; i += 1) {
      i === 0 ? input.value = inputValue[i] : input.value += inputValue[i];
    }
    return oldValue = input.value;
  } else if (valid) {
    firstEdit = false;
    oldValue = input.value;
    return setEmployeeData({ ...employeeData, [inputName]: input.value });
  } else if (oldValue.length && input.value.length) {
    input.value = oldValue;
    return setEmployeeData({ ...employeeData, [inputName]: oldValue });
  }

  oldValue = "";
  setEmployeeData({ ...employeeData, [inputName]: oldValue });
};

export default maskNumber;
