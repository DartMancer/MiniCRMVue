export interface Task {
  id: string;
  managerId: string;
  clientId: string;
  text: string;
  completed: boolean;
}

export interface Client {
  id: string;
  managerId: string;
  name: string;
  email: string;
  phone?: string;
  status: "active" | "pending" | "archived";
  tasks: Task[];
}
