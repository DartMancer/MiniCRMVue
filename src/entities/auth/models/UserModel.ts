import { Role } from "@/shared/types";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
