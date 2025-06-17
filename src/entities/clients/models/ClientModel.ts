export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: "active" | "pending" | "archived";
  tasks: Task[];
}
