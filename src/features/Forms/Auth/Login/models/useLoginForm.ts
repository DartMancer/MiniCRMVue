import { ref } from "vue";
import { useRouter } from "vue-router";
import { defaultLoginForm } from "@/shared/constants";
import { LoginUser, useSessionStore } from "@/entities/auth";
import { LoginFormState } from "./LoginFormState";

export const useLoginForm = () => {
  const { login } = useSessionStore();

  const router = useRouter();

  const formState = ref<LoginFormState>(defaultLoginForm);
  const loading = ref<boolean>(false);

  const onFinish = (val: LoginFormState) => {
    loading.value = true;
    try {
      const user: LoginUser = {
        email: val.email,
        password: val.password,
      };

      if (login(user)) {
        router.push("/");
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

  return { formState, loading, onFinish, onFinishFailed, routeReg };
};
