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

  const login = (data: LoginUser) => {
    const res = loginApi(data);
    if (!res.success && res.error) return errorMessage(res.error);

    user.value = res.data;
  };

  const registration = (data: StoredUser) => {
    const res = registerApi(data);
    if (!res.success && res.error) return errorMessage(res.error);

    return res;
  };

  const logout = () => (user.value = null);

  return { user: readonly(user), isLoggedIn, login, registration, logout };
});
