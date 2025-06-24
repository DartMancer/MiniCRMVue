import { Role } from "@/shared/types";

export interface EditUserFormState {
  name: string;
  email: string;
  role: Role | null;
}
