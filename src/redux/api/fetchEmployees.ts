import DB, { ref, onValue } from "../..//firebase";

export default (userId: string) => {
  const employeesRef = ref(DB, `users/${userId}/employees`);
  onValue(employeesRef, (snapshot) => {
    const employees = snapshot.val();
    console.log(employees);
  });
};
