<script setup lang="ts">
const value = defineModel<string | number>("value");

const props = defineProps<{
  name: string | string[];
  placeholder: string;
  options: any;
  label?: any;
  rules?: any;
  form?: boolean;
}>();

const emit = defineEmits<{
  (e: "search", query: string): void;
}>();

const handleSearch = (query: string) => {
  emit("search", query);
};
</script>

<template>
  <a-form-item
    class="form-item"
    :name="props.name"
    :label="label"
    :rules="rules"
  >
    <a-auto-complete
      class="custom-auto-complete"
      v-model:value="value"
      :options="props.options"
      @search="handleSearch"
    >
      <template #default>
        <a-input
          :class="['input', { form }]"
          v-model:value="value"
          :placeholder="props.placeholder"
          allowClear
        />
      </template>
      <template #option="slotProps">
        <slot name="option" v-bind="slotProps">
          {{ slotProps.value }}
        </slot>
      </template>
    </a-auto-complete>
  </a-form-item>
</template>

<style lang="scss" scoped>
.form-item {
  &.full-w {
    width: 100%;
  }
}

.input {
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--shadow);

  &.form {
    border-top-left-radius: 8px;
  }
}

:deep(.custom-auto-complete .ant-select-selector) {
  padding: 0;
}
</style>
