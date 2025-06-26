import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";
import { defaultRegForm } from "@/shared/constants";
import { StoredUser, useSessionStore } from "@/entities/auth";
import { RegistrationFormState } from "./RegistrationFormState";
import { PickKeysWithType, RemoveKeys } from "@/shared/utils";

type RawKeys = PickKeysWithType<StoredUser, string>;

type FinalKeys = RemoveKeys<RawKeys, "id" | "role">;

export const useRegForm = () => {
  const { registration } = useSessionStore();

  const router = useRouter();

  const formState = ref<RegistrationFormState>({ ...defaultRegForm });
  const loading = ref<boolean>(false);

  const regPlaceholders: Record<FinalKeys, string> = {
    name: "Укажите Ваше имя",
    email: "Укажите Вашу почту",
    password: "Укажите Ваш пароль",
  };

  const onFinish = (val: RegistrationFormState) => {
    loading.value = true;
    try {
      const user: StoredUser = {
        id: uuidv4(),
        name: val.name,
        email: val.email,
        password: val.password,
        role: "manager",
      };

      if (registration(user)) {
        router.push("/login");
        Object.assign(formState.value, defaultRegForm);
      }
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  const routeLogin = () => router.push("/login");

  return {
    formState,
    loading,
    regPlaceholders,
    onFinish,
    onFinishFailed,
    routeLogin,
  };
};
