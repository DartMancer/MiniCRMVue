import { computed, readonly } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { User } from "../models";
import { useUserStorage } from "../composables";
import { LoginUser, StoredUser } from "../types";
import { errorMessage } from "@/shared/utils";

export const useSessionStore = defineStore("session", () => {
  const user = useStorage<User | null>("user", null);

  const isLoggedIn = computed(() => !!user.value);

  const { loginApi, registerApi } = useUserStorage();

  const login = (data: LoginUser): boolean => {
    const res = loginApi(data);
    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    user.value = res.data;
    return res.success;
  };

  const registration = (data: StoredUser): boolean => {
    const res = registerApi(data);
    if (!res.success && res.error) {
      errorMessage(res.error);
      return res.success;
    }

    return res.success;
  };

  const logout = () => (user.value = null);

  return { user: readonly(user), isLoggedIn, login, registration, logout };
});
