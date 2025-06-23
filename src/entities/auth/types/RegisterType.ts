import { Role } from "@/shared/types";

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
