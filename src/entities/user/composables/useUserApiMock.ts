import { computed, readonly } from "vue";
import { StorageSerializers, useStorage } from "@vueuse/core";
import { Response, Role } from "@/shared/types";
import { StoredUser, User } from "@/entities/auth";
import { EditUser } from "../types";

export const useUserApiMock = () => {
  const users = useStorage<StoredUser[]>("users", []);
  const user = useStorage<User | null>("user", null, undefined, {
    serializer: StorageSerializers.object,
  });

  const getAdmins = computed(() =>
    users.value.filter((u) => u.role === "admin")
  );
  const getManagers = computed(() =>
    users.value.filter((u) => u.role === "manager")
  );

  const getUserById = (id: string) => users.value.find((u) => u.id === id);

  const updateUserApi = (id: string, updatedFields: EditUser): Response => {
    const index = users.value.findIndex((u) => u.id === id);
    if (index === -1) {
      return { success: false, error: "Пользователь не найден" };
    }

    const existingUser = users.value[index];

    const updatedUser: StoredUser = {
      ...existingUser,
      ...updatedFields,
      password: existingUser.password,
    };

    users.value = users.value.map((u) => (u.id === id ? updatedUser : u));

    if (user.value?.id === id) {
      user.value = {
        ...user.value,
        ...updatedFields,
      };
    }

    return { success: true };
  };

  const deleteUserApi = (id: string): Response => {
    const findUser = getUserById(id);
    if (!findUser) return { success: false, error: "Пользователь не найден" };

    users.value = users.value.filter((u) => u.id !== id);
    user.value = null;

    return { success: true };
  };

  const changeOwnerApi = (managerId: string, role: Role): Response => {
    const manager = getUserById(managerId);
    if (!user.value || !manager) {
      return { success: false, error: "Не удалось передать права" };
    }

    user.value = { ...user.value, role };
    users.value = users.value.map((u) => {
      if (u.id === user.value?.id) return { ...u, role };
      if (u.id === managerId) return { ...u, role: "owner" };
      return u;
    });

    return { success: true };
  };

  return {
    getAdmins,
    getManagers,
    updateUserApi,
    deleteUserApi,
    changeOwnerApi,
    users: readonly(users),
  };
};
