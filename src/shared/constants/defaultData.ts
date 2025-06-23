import { ClientFormState } from "@/features/Forms/AddClient/models";
import { RegistrationFormState } from "@/features/Forms/Auth/Registration/model";

export const defaultClientForm: ClientFormState = { name: "", email: "" };

export const defaultRegForm: RegistrationFormState = {
  name: "",
  email: "",
  password: "",
  role: null,
};
