import { useStorage } from "@vueuse/core";
import { Response } from "@/shared/types";
import { User } from "../models";
import { LoginUser, StoredUser } from "../types";

export const useAuthStorage = () => {
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
    users,
    registerApi,
    getUserByEmail,
    loginApi,
  };
};
