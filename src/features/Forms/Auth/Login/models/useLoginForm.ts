import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { defaultLoginForm } from "@/shared/constants";
import { LoginUser, useSessionStore } from "@/entities/auth";
import { LoginFormState } from "./LoginFormState";
import { toLoginForm } from "./loginFormAdapter";

export const useLoginForm = () => {
  const { user } = storeToRefs(useSessionStore());
  const { login } = useSessionStore();

  const router = useRouter();

  const formState = ref<LoginFormState>(
    user.value ? toLoginForm(user.value) : defaultLoginForm
  );
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
