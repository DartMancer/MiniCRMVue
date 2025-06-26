import { computed, onMounted, readonly, ref } from "vue";
import { storeToRefs } from "pinia";
import { Role, SelectOption } from "@/shared/types";
import { usersToOptions } from "@/shared/utils/toOptions";
import { defaultChangeOwnerForm } from "@/shared/constants";
import { useSessionStore } from "@/entities/auth";
import { useUserApiMock, useUserStore } from "@/entities/user";
import { ChangeOwnerFormState } from "./ChangeOwnerFormState";

export const useChangeOwner = (role: Role | null) => {
  const { user } = storeToRefs(useSessionStore());
  const { changeOwner } = useUserStore();

  const formState = ref<ChangeOwnerFormState>({ ...defaultChangeOwnerForm });
  const loading = ref<boolean>(false);
  const options = ref<SelectOption[]>([]);
  const isFilled = computed(() => formState.value.role !== null);

  const handleEdit = (): boolean => {
    const id = formState.value.role;
    if (!id || !role) return false;

    return changeOwner(id, role);
  };

  const onFinish = () => {
    loading.value = true;

    try {
      handleEdit();
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  onMounted(() => {
    const { getAdmins } = useUserApiMock();
    options.value = usersToOptions(getAdmins.value);
  });

  return {
    user: readonly(user),
    formState,
    isFilled,
    options: readonly(options),
    loading: readonly(loading),
    handleEdit,
    onFinish,
    onFinishFailed,
  };
};
