<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useClientsStore } from "@/entities/clients";

const { clientCount } = storeToRefs(useClientsStore());
</script>

<template>
  <a-flex class="clients-count-container">
    <span class="clients-count-container__text">Количество клиентов:</span>
    <span class="clients-count-container__count title">
      {{ clientCount }}
    </span>
  </a-flex>
</template>

<style lang="scss" scoped>
.clients-count-container {
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
