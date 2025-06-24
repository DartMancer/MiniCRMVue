import { ClientFormState } from "@/features/Forms/AddClient/models";
import { LoginFormState } from "@/features/Forms/Auth/Login/models";
import { RegistrationFormState } from "@/features/Forms/Auth/Registration/models";
import { EditUserFormState } from "@/features/Forms/EditUser/model";

export const defaultClientForm: ClientFormState = { name: "", email: "" };

export const defaultRegForm: RegistrationFormState = {
  name: "",
  email: "",
  password: "",
  role: null,
};

export const defaultLoginForm: LoginFormState = {
  email: "",
  password: "",
};

export const defaultEditUserForm: EditUserFormState = {
  name: "",
  email: "",
  password: "",
  role: null,
};
