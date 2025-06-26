import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { defaultLoginForm } from "@/shared/constants";
import { PickKeysWithType, RemoveKeys } from "@/shared/utils";
import { LoginUser, StoredUser, useSessionStore } from "@/entities/auth";
import { toLoginForm } from "./loginFormAdapter";
import { LoginFormState } from "./LoginFormState";

type RawKeys = PickKeysWithType<StoredUser, string>;

type FinalKeys = RemoveKeys<RawKeys, "id" | "name" | "role">;

export const useLoginForm = () => {
  const { user } = storeToRefs(useSessionStore());
  const { login } = useSessionStore();

  const router = useRouter();

  const formState = ref<LoginFormState>(
    user.value ? toLoginForm(user.value) : { ...defaultLoginForm }
  );
  const loading = ref<boolean>(false);

  const loginPlaceholders: Record<FinalKeys, string> = {
    email: "Укажите Вашу почту",
    password: "Укажите Ваш пароль",
  };

  const onFinish = (val: LoginFormState) => {
    loading.value = true;
    try {
      const user: LoginUser = {
        email: val.email,
        password: val.password,
      };

      if (login(user)) {
        router.push("/account");
        Object.assign(formState.value, defaultLoginForm);
      }
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  const routeReg = () => router.push("/registration");

  return {
    formState,
    loading,
    loginPlaceholders,
    onFinish,
    onFinishFailed,
    routeReg,
  };
};
