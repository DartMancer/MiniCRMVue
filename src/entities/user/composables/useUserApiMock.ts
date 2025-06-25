import { readonly } from "vue";
import { StorageSerializers, useStorage } from "@vueuse/core";
import { Response } from "@/shared/types";
import { StoredUser, User } from "@/entities/auth";
import { EditUser } from "../types";

export const useUserApiMock = () => {
  const users = useStorage<StoredUser[]>("users", []);
  const user = useStorage<User | null>("user", null, undefined, {
    serializer: StorageSerializers.object,
  });

  const getUserById = (id: string) => users.value.find((u) => u.id === id);

  const updateUserApi = (id: string, updatedFields: EditUser): Response => {
    const index = users.value.findIndex((u) => u.id === id);
    if (index === -1) {
      return { success: false, error: "Пользователь не найден" };
    }

    updatedFields.password = users.value[index].password;
    users.value[index] = { ...users.value[index], ...updatedFields };
    user.value = updatedFields;

    return { success: true };
  };

  const deleteUserApi = (id: string): Response => {
    console.log(users.value, id);

    const index = users.value.findIndex((u) => u.id === id);
    if (index === -1) {
      return { success: false, error: "Пользователь не найден" };
    }

    users.value.splice(index, 1);
    user.value = null;
    return { success: true };
  };

  return {
    getUserById,
    updateUserApi,
    deleteUserApi,
    users: readonly(users),
  };
};
