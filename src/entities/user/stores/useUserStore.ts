import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { errorMessage, successMessage } from "@/shared/utils";
import { useSessionStore } from "@/entities/auth";
import { useUserApiMock } from "../composables";
import { EditUser } from "../types";
import { Role } from "@/shared/types";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  const { user } = useSessionStore();

  const { changeOwnerApi, updateUserApi, deleteUserApi } = useUserApiMock();

  const editUser = (data: EditUser): boolean => {
    if (!user) return false;
    const res = updateUserApi(data.id, data);

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

  const changeOwner = (managerId: string, role: Role) => {
    const res = changeOwnerApi(managerId, role);

    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }
    successMessage("Данные изменены");
    return res.success;
  };

  return { editUser, deleteUser, changeOwner };
});
