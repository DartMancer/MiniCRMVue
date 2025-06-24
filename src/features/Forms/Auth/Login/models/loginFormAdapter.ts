import { User } from "@/entities/auth";
import { LoginFormState } from "./LoginFormState";

export const toLoginForm = (user: User): LoginFormState => {
  return { email: user.email, password: "" };
};
