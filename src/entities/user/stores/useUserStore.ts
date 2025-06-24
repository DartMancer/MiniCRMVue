import { defineStore } from "pinia";
import { EditUser } from "../types";
import { useUserApiMock } from "../composables";
import { errorMessage, successMessage } from "@/shared/utils";

export const useUserStore = defineStore("userStore", () => {
  const { updateUserApi, deleteUserApi } = useUserApiMock();

  const editUser = (id: string, data: EditUser): boolean => {
    const res = updateUserApi(id, data);

    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    successMessage("Данные изменены");
    return res.success;
  };

  const deleteUser = (id: string): boolean => {
    const res = deleteUserApi(id);

    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    successMessage("Аккаунт удален");
    return res.success;
  };

  return { editUser, deleteUser };
});
