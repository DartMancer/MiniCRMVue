<script lang="ts" setup>
const value = defineModel<string | undefined>("value", { required: true });

defineProps<{
  name: string | string[];
  placeholder: string;
  refName?: string;
  label?: string | null;
  form?: boolean;
  rules?: any;
}>();
</script>

<template>
  <a-form-item :name :label :rules>
    <a-input
      :ref="refName"
      :class="['input', { form }]"
      v-model:value="value"
      :placeholder="placeholder"
      allow-clear
    />
  </a-form-item>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--shadow);

  &.form {
    border-top-left-radius: 8px;
  }
}
</style>
