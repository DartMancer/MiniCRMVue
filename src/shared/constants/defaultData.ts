import { ClientFormState } from "@/features/Forms/AddClient/models";
import { LoginFormState } from "@/features/Forms/Auth/Login/models";
import { RegistrationFormState } from "@/features/Forms/Auth/Registration/models";
import { ChangeOwnerFormState } from "@/features/Forms/ChangeOwner/model";
import { EditManagerFormState } from "@/features/Forms/EditManager/model";
import { EditUserFormState } from "@/features/Forms/EditUser/model";

export const defaultClientForm: ClientFormState = { name: "", email: "" };

export const defaultRegForm: RegistrationFormState = {
  name: "",
  email: "",
  password: "",
};

export const defaultLoginForm: LoginFormState = {
  email: "",
  password: "",
};

export const defaultEditUserForm: EditUserFormState = {
  name: "",
  email: "",
  role: null,
};

export const defaultEditManagerForm: EditManagerFormState = {
  role: null,
};

export const defaultChangeOwnerForm: ChangeOwnerFormState = {
  role: null,
};
