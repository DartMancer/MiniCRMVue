<script lang="ts" setup>
import { DeepReadonly } from "vue";
import { SelectOption } from "@/shared/types";

type ReadonlyOptions = DeepReadonly<SelectOption[]>;

const value = defineModel<string | null>("value", { required: true });

defineProps<{
  name: string | string[];
  placeholder: string;
  options: SelectOption[] | ReadonlyOptions;
  disabled?: boolean;
  label?: string | null;
  form?: boolean;
  rules?: any;
}>();

const popupContainer = () => document.querySelector(".custom-select");
</script>

<template>
  <a-form-item :name :label :rules>
    <a-select
      v-model:value="value"
      :class="['custom-select', { form }]"
      :options
      :placeholder
      :disabled
      :getPopupContainer="popupContainer"
    />
  </a-form-item>
</template>

<style lang="scss" scoped>
.custom-select {
  :deep(.ant-select-selector) {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
  }

  &.form {
    :deep(.ant-select-selector) {
      border-top-left-radius: 8px;
    }
  }
}
</style>
