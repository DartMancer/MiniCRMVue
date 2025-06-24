<script setup lang="ts">
import { Input, Select } from "@/shared/ui/Other";
import { MailInput } from "@/widgets/MailInput";
import { useAccountBody } from "../model";

const { formState, options, loading, isUpdated, onFinish, onFinishFailed } =
  useAccountBody();
</script>

<template>
  <a-form
    v-model:model="formState"
    class="input-container"
    layout="vertical"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <Input
      v-model:value="formState.name"
      name="name"
      label="Имя"
      placeholder="Введите имя"
      form
    />
    <MailInput
      v-model:value="formState.email"
      name="email"
      label="Почта"
      placeholder="Введите почту"
    />
    <Select
      v-model:value="formState.role"
      :options="options"
      name="role"
      label="Роль"
      placeholder="Укажите роль"
      form
    />

    <a-button
      :class="['action-btn', { disabled: !isUpdated }]"
      html-type="submit"
      :loading
      :disabled="!isUpdated"
    >
      <span class="action-btn__text">Редактировать</span>
    </a-button>
  </a-form>
</template>

<style lang="scss" scoped>
.action-btn {
  width: 100%;
  height: fit-content;
  padding: 5px 20px;
  border-radius: 20px;
  border-color: #5faf20;
  background-color: rgba($color: #5faf20, $alpha: 0.2);

  &__text {
    font-size: 14px;
    color: #5faf20;
  }

  &.disabled {
    border-color: rgba($color: #000000, $alpha: 0.3);
    background-color: rgba($color: #000000, $alpha: 0.05);

    .action-btn__text {
      color: rgba($color: #000000, $alpha: 0.5);
    }
  }

  &:hover:not(.disabled) {
    border-color: #5faf20;
    background-color: rgba($color: #5faf20, $alpha: 0.3);
  }
}
</style>
