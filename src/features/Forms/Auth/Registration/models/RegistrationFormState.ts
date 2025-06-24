import { Role } from "@/shared/types";

export interface RegistrationFormState {
  name: string;
  email: string;
  password: string;
  role: Role | null;
}
