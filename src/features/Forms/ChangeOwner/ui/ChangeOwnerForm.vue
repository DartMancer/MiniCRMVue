<script setup lang="ts">
import { Role } from "@/shared/types";
import { Select } from "@/shared/ui/Other";
import { BaseButton } from "@/shared/ui/Button";
import { useRoles } from "@/entities/user";
import { useChangeOwner } from "../model";

const open = defineModel<boolean>("open", { required: true });
const { role } = defineProps<{ role: Role | null }>();
const emit = defineEmits<{ (e: "reset"): void; (e: "update"): void }>();

const { canEditUserRole } = useRoles();
const { formState, options, loading, isFilled, onFinish, onFinishFailed } =
  useChangeOwner(role);

const handleFinish = () => {
  onFinish();
  emit("update");
  open.value = false;
};

const handleClose = () => {
  emit("reset");
  open.value = false;
};
</script>

<template>
  <a-form
    class="form"
    v-model:model="formState"
    layout="vertical"
    @finish="handleFinish"
    @finishFailed="onFinishFailed"
  >
    <Select
      class="select"
      v-model:value="formState.role"
      :options="options"
      :disabled="!canEditUserRole"
      name="role"
      label="Администратор"
      placeholder="Выберите нового владельца"
      form
    />

    <a-flex class="form-actions" justify="flex-end">
      <BaseButton text="Отменить" @click="handleClose" error />
      <BaseButton
        text="Передать права"
        html-type="submit"
        :loading
        :disabled="!isFilled"
        success
      />
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select {
  width: 100%;
}

.form-actions {
  width: 100%;
  gap: 10px;
}
</style>
