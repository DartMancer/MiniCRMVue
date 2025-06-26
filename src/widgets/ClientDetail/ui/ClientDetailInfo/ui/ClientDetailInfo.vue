<script lang="ts" setup>
import { computed } from "vue";
import { BaseContainer } from "@/shared/ui/Other";
import { useClientsStore } from "@/entities/clients";

const { getClientById } = useClientsStore();

const { clientId } = defineProps<{ clientId: string }>();
const currentClient = computed(() => getClientById(clientId.toString()));
</script>

<template>
  <BaseContainer class="base-container">
    <span class="title"> {{ currentClient?.name }}</span>
    <span class="content"> Статус: {{ currentClient?.status }}</span>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  flex-direction: column;
  width: 45%;
  align-items: start;
  padding: 20px 40px;
}

.title {
  font-size: 28px;
}

.content {
  font-size: 20px;
}
</style>
