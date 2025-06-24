import { Role } from "@/shared/types";

export interface EditUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
