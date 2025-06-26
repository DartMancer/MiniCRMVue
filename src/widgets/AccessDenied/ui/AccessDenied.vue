<script setup lang="ts">
import { X } from "lucide-vue-next";
import { BaseContainer } from "@/shared/ui/Other";
</script>

<template>
  <BaseContainer class="base-container">
    <X class="icon" />
    <a-flex align="center" vertical>
      <span class="title"> Доступ запрещен </span>
      <span class="subtitle"> Обратитесь к администратору </span>
    </a-flex>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  height: fit-content;
  flex-direction: column;
  padding: 60px 80px;
}

.icon {
  width: 150px;
  height: 150px;
  stroke: var(--error-color);
}

.title {
  font-size: 24px;
}

.subtitle {
  font-size: 20px;
}
</style>
