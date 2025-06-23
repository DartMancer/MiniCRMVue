<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { BaseContainer } from "@/shared";
import { useClientsStore } from "@/entities/clients";

const { getClient } = useClientsStore();

const route = useRoute();

const clientId = route.params.id;
const currentClient = computed(() => getClient(clientId.toString()));
</script>

<template>
  <BaseContainer class="base-container">
    <span class="title"> Контактная информация</span>
    <span class="content"> Email: {{ currentClient?.email }}</span>
    <span v-if="currentClient?.phone" class="content">
      Телефон: {{ currentClient?.phone }}
    </span>
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
