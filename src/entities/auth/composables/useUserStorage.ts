import { readonly } from "vue";
import { useStorage } from "@vueuse/core";
import { User } from "../models";
import { LoginUser, StoredUser } from "../types";
import { Response } from "@/shared/types";

export const useUserStorage = () => {
  const users = useStorage<StoredUser[]>("users", []);

  const registerApi = (data: StoredUser): Response => {
    const exists = users.value.find((u) => u.email === data.email);
    if (exists) {
      return {
        success: false,
        error: "Пользователь с таким email уже существует",
      };
    }

    users.value.push(data);
    return { success: true };
  };

  //   const getUserById = (id: string) => {
  //     return users.value.find((u) => u.id === id);
  //   };

  const getUserByEmail = (email: string) => {
    return users.value.find((u) => u.email === email);
  };

  const loginApi = (data: LoginUser): Response<User> => {
    const user = getUserByEmail(data.email);

    if (user && user.password === data.password) {
      return { success: true, data: convertToUser(user) };
    }

    return { success: false, error: "Неверный email или пароль" };
  };

  const convertToUser = (data: StoredUser): User => {
    const { password, ...user } = data;
    return user;
  };

  return {
    users: readonly(users),
    registerApi,
    getUserByEmail,
    loginApi,
  };
};
