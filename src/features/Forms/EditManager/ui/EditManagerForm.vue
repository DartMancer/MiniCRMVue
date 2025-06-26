<script setup lang="ts">
import { Select } from "@/shared/ui/Other";
import { BaseButton } from "@/shared/ui/Button";
import { useRoles } from "@/entities/user";
import { useManagerAccount } from "../model";

const { managerId } = defineProps<{ managerId: string }>();
const { formState, options, loading, isUpdated, onFinish, onFinishFailed } =
  useManagerAccount(managerId);
const { canEditUserRole } = useRoles();
</script>

<template>
  <a-form
    class="form"
    v-model:model="formState"
    layout="vertical"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <Select
      class="select"
      v-model:value="formState.role"
      :options="options"
      :disabled="!canEditUserRole"
      name="role"
      label="Роль"
      placeholder="Укажите роль"
      form
    />

    <BaseButton
      text="Редактировать"
      html-type="submit"
      :loading
      :disabled="!isUpdated"
      success
    />
  </a-form>
</template>

<style lang="scss" scoped>
.form {
  gap: 10px;
}

.select {
  width: 100%;
}
</style>
