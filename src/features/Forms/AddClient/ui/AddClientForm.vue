<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "@/shared/ui/Other";
import { BaseButton } from "@/shared/ui/Button";
import { MailInput } from "@/widgets/MailInput";
import { ClientFormState, useClientForm, validateRules } from "../models";

const {
  formState,
  loading,
  clientPlaceholders,
  restoreForm,
  onFinish,
  onFinishFailed,
} = useClientForm();

const emit = defineEmits<{ (e: "closeModal"): void }>();

const nameInput = ref<HTMLInputElement | null>(null);

const focusOnFirstInput = () => {
  nameInput.value?.focus();
};

const handleFinish = (val: ClientFormState) => {
  onFinish(val);
  emit("closeModal");
};

const handleClose = () => {
  restoreForm();
  emit("closeModal");
};

defineExpose({ focusOnFirstInput });
</script>

<template>
  <a-form
    v-model:model="formState"
    class="input-container"
    layout="vertical"
    :rules="validateRules"
    @finish="handleFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex vertical>
      <Input
        refName="nameInput"
        v-model:value="formState.name"
        name="name"
        label="Имя клиента"
        :placeholder="clientPlaceholders.name"
        form
      />

      <MailInput
        v-model:value="formState.email"
        name="email"
        label="Почта клиента"
        :placeholder="clientPlaceholders.email"
        form
      />
    </a-flex>

    <a-flex class="form-actions" justify="flex-end">
      <BaseButton text="Отмена" @click="handleClose" error />
      <BaseButton
        text="Добавить"
        html-type="submit"
        :loading="loading"
        success
      />
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  padding: 0 30px;
}

.form-actions {
  gap: 10px;
}
</style>
