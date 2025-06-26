import { computed, onMounted, readonly, Ref, ref } from "vue";
import { storeToRefs } from "pinia";
import { isEqual } from "lodash-es";
import { SelectOption } from "@/shared/types";
import {
  defaultEditUserForm,
  partialRoleOptions,
  roleOptions,
} from "@/shared/constants";
import { useSessionStore } from "@/entities/auth";
import { EditUser, useRoles, useUserStore } from "@/entities/user";
import { EditUserFormState } from "./EditUserFormState";
import { PickKeysWithType, RemoveKeys } from "@/shared/utils";

type RawKeys = PickKeysWithType<EditUser, string>;

type FinalKeys = RemoveKeys<RawKeys, "id" | "password">;

export const useAccountBody = (open: Ref<boolean>) => {
  const { user } = storeToRefs(useSessionStore());
  const { editUser } = useUserStore();
  const { isOwner } = useRoles();

  const initialFormState = ref<EditUserFormState>({ ...defaultEditUserForm });
  const formState = ref<EditUserFormState>({ ...defaultEditUserForm });
  const loading = ref<boolean>(false);
  const options = ref<SelectOption[]>(
    isOwner.value ? roleOptions : partialRoleOptions
  );

  const isUpdated = computed(
    () => !isEqual(initialFormState.value, formState.value)
  );

  const accountPlaceholders: Record<FinalKeys, string> = {
    name: "Введите имя",
    email: "Введите почту",
    role: "Укажите роль",
  };

  const handleEdit = (): boolean => {
    if (!user.value) return false;
    const fs = formState.value;
    const is = initialFormState.value;

    if (is.role === "owner" && fs.role !== "owner") {
      open.value = true;
      return false;
    }

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
      if (handleEdit()) initialFormUpdate();
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  const initialFormUpdate = () => {
    Object.assign(initialFormState.value, formState.value);
  };

  const resetForm = () => {
    Object.assign(formState.value, initialFormState.value);
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
    accountPlaceholders,
    handleEdit,
    initialFormUpdate,
    resetForm,
    onFinish,
    onFinishFailed,
  };
};
