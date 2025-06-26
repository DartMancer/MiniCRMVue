<script setup lang="ts">
import { BaseButton } from "@/shared/ui/Button";
</script>

<template>
  <a-flex vertical>
    <BaseButton class="base-btn top title" text="Импорт" full-w />
    <a-divider />
    <BaseButton class="base-btn btm title" text="Экспорт" full-w />
  </a-flex>
</template>

<style lang="scss" scoped>
.base-btn {
  padding: 10px 50px;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;

  &.top {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &.btm {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.2);
  }

  &:active {
    box-shadow: none;
    transform: none;
  }
}

:deep(.ant-divider-horizontal) {
  margin: 0;
}
</style>
