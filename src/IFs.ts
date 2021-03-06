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