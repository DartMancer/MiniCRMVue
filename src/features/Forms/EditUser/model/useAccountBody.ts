import { computed, onMounted, readonly, ref } from "vue";
import { storeToRefs } from "pinia";
import { isEqual } from "lodash-es";
import { SelectOption } from "@/shared/types";
import { defaultEditUserForm } from "@/shared/constants";
import { useSessionStore } from "@/entities/auth";
import { EditUser, useUserStore } from "@/entities/user";
import { EditUserFormState } from "./EditUserFormState";

export const useAccountBody = () => {
  const { user } = storeToRefs(useSessionStore());
  const { editUser } = useUserStore();

  const initialFormState = ref<EditUserFormState>({ ...defaultEditUserForm });
  const formState = ref<EditUserFormState>({ ...defaultEditUserForm });
  const loading = ref<boolean>(false);
  const options = ref<SelectOption[]>([
    { value: "manager", label: "Менеджер" },
    { value: "admin", label: "Администратор" },
  ]);

  const isUpdated = computed(
    () => !isEqual(initialFormState.value, formState.value)
  );

  const handleEdit = (): boolean => {
    if (!user.value) return false;
    const fs = formState.value;
    const edit: EditUser = {
      id: user.value.id,
      name: fs.name ?? user.value.name,
      email: fs.email ?? user.value.email,
      password: "",
      role: fs.role ?? user.value.role,
    };

    return editUser(edit);
  };

  const onFinish = () => {
    loading.value = true;

    try {
      if (handleEdit()) Object.assign(initialFormState.value, formState.value);
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  onMounted(() => {
    if (!user.value) return;
    formState.value.name = user.value.name;
    formState.value.email = user.value.email;
    formState.value.role = user.value.role;

    initialFormState.value = { ...formState.value };
  });

  return {
    user: readonly(user),
    isUpdated: readonly(isUpdated),
    formState,
    initialFormState,
    options: readonly(options),
    loading: readonly(loading),
    handleEdit,
    onFinish,
    onFinishFailed,
  };
};
