export interface AuthFields {
  email: string,
  password: string,
  confirm_password?: string,
}

export interface User {
  uid: string | undefined;
  displayName: string | null | undefined;
  email: string | null | undefined;
  emailVerified: boolean | undefined;
  phoneNumber: string | null | undefined;
  photoURL: string | null | undefined ;
}

export interface Employee {
  id: number;
  name: string;
  age: string;
  position: string;
  start_date: string;
  salary: string;
  status: string;
}

export interface Project {
  id: number;
  name: string;
  clientName?: string;
  budget: string;
  deadLine: string;
  teamNum: number;
  status?: string;
}