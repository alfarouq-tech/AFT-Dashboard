import DB, { ref, set } from "../..//firebase";
import { Employee } from "../../IFs";

export default (userId: string, employee: Employee) => {
  const employeesRef = ref(DB, `users/${userId}/employees`);
  set(employeesRef, {
    employee,
  });
};
