<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useManagersStore } from "@/entities/managers";

const { managersClientsCount } = storeToRefs(useManagersStore());
const { managerId } = defineProps<{ managerId: string }>();
</script>

<template>
  <a-flex class="manager-clients-title" justify="space-between" align="center">
    <span class="title">Клиенты</span>
    <a-flex class="clients-count-container" justify="center" align="center">
      <span class="clients-count title">
        {{ managersClientsCount(managerId) }}
      </span>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.manager-clients-title {
  width: 100%;
}

.title {
  font-size: 28px;
}

.clients-count-container {
  width: 45px;
  height: 45px;
  border: 1px solid var(--primary-color);
  border-radius: 12px;
  background-color: rgba($color: #000000, $alpha: 0.7);
  box-shadow: var(--shadow);

  .clients-count {
    color: var(--primary-color);
  }
}
</style>
