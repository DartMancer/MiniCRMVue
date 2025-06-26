import { SelectOption } from "../types";

export const roleOptions: SelectOption[] = [
  { value: "owner", label: "Владелец" },
  { value: "admin", label: "Администратор" },
  { value: "manager", label: "Менеджер" },
];

export const partialRoleOptions: SelectOption[] = [
  { value: "admin", label: "Администратор" },
  { value: "manager", label: "Менеджер" },
];
