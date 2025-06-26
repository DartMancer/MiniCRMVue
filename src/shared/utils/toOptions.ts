import { StoredUser } from "@/entities/auth";
import { SelectOption } from "../types";

export const usersToOptions = (users: StoredUser[]): SelectOption[] => {
  const usersOptions: SelectOption[] = users.map((u) => {
    return {
      label: `${u.name} - ${u.email}`,
      value: u.id,
    };
  });

  return usersOptions;
};
