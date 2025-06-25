import { defineStore } from "pinia";
import { EditUser } from "../types";
import { useUserApiMock } from "../composables";
import { errorMessage, successMessage } from "@/shared/utils";
import { useRouter } from "vue-router";
import { useSessionStore } from "@/entities/auth";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  const { user } = useSessionStore();
  const { updateUserApi, deleteUserApi } = useUserApiMock();

  const editUser = (data: EditUser): boolean => {
    if (!user) return false;
    const res = updateUserApi(user.id, data);

    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    successMessage("Данные изменены");
    return res.success;
  };

  const deleteUser = (): boolean => {
    if (!user) return false;
    const res = deleteUserApi(user.id);

    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    router.push("/registration");
    successMessage("Аккаунт удален");
    return res.success;
  };

  return { editUser, deleteUser };
});
