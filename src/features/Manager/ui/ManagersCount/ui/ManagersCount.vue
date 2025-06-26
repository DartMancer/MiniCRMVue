<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useManagersStore } from "@/entities/managers";

const { managersCount } = storeToRefs(useManagersStore());
</script>

<template>
  <a-flex class="managers-count-container">
    <span class="managers-count-container__text">Количество менеджеров:</span>
    <span class="managers-count-container__count title">
      {{ managersCount }}
    </span>
  </a-flex>
</template>

<style lang="scss" scoped>
.managers-count-container {
  gap: 8px;

  &__text {
    display: flex;
    align-items: center;
    font-size: 30px;
  }

  &__count {
    font-size: 50px;
  }
}
</style>
