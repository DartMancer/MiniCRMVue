<script lang="ts" setup>
import { AutoCompleteInput } from "@/shared/ui/Other";
import { useMailManager } from "../model";

const { options, handleSearch } = useMailManager();

const value = defineModel<string>("value", { required: true });

defineProps<{
  name: string | string[];
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  form?: boolean;
}>();
</script>

<template>
  <AutoCompleteInput
    v-model:value="value"
    class="contact-input"
    :name="name"
    :label="label"
    :placeholder="placeholder ?? 'Введите почту'"
    :options="options"
    @search="handleSearch"
    form
  >
    <template #option="{ value: val }">
      {{ val.split("@")[0] }}@<span style="font-weight: bold">
        {{ val.split("@")[1] }}
      </span>
    </template>
  </AutoCompleteInput>
</template>

<style lang="scss" scoped>
:deep(.ant-select-selector) {
  width: 100% !important;
  border: none !important;
}
</style>
