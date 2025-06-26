import { computed, onMounted, readonly, ref } from "vue";
import { storeToRefs } from "pinia";
import { isEqual } from "lodash-es";
import { SelectOption } from "@/shared/types";
import { defaultEditManagerForm, partialRoleOptions } from "@/shared/constants";
import { useSessionStore } from "@/entities/auth";
import { EditUser, useUserStore } from "@/entities/user";
import { useManagersStore } from "@/entities/managers";
import { EditManagerFormState } from "./EditManagerFormState";

export const useManagerAccount = (managerId: string) => {
  const { user } = storeToRefs(useSessionStore());
  const { editUser } = useUserStore();
  const { getManagerById } = useManagersStore();

  const initialFormState = ref<EditManagerFormState>({
    ...defaultEditManagerForm,
  });
  const formState = ref<EditManagerFormState>({ ...defaultEditManagerForm });
  const loading = ref<boolean>(false);
  const options = ref<SelectOption[]>(partialRoleOptions);

  const isUpdated = computed(
    () => !isEqual(initialFormState.value, formState.value)
  );

  const handleEdit = (): boolean => {
    const manager = getManagerById(managerId);
    if (!manager) return false;

    const fs = formState.value;
    const edit: EditUser = {
      id: manager.id,
      name: manager.name,
      email: manager.email,
      password: "",
      role: fs.role ?? manager.role,
    };

    return editUser(edit);
  };

  const initialFormUpdate = () => {
    Object.assign(initialFormState.value, formState.value);
  };

  const resetForm = () => {
    Object.assign(formState.value, initialFormState.value);
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
    const manager = getManagerById(managerId);
    if (!manager) return false;

    formState.value.role = manager.role;
    initialFormState.value = { ...formState.value };
  });

  return {
    user: readonly(user),
    isUpdated: readonly(isUpdated),
    formState,
    initialFormState,
    options: readonly(options),
    loading: readonly(loading),
    initialFormUpdate,
    resetForm,
    handleEdit,
    onFinish,
    onFinishFailed,
  };
};
