<script lang="ts" setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { BaseContainer } from "@/shared";
import { useClientsStore } from "@/entities/clients";
import { ClientsCount } from "@/features/ClientsCount";
import { AddClientTrigger } from "@/features/AddClient";
import { ClientCard } from "@/widgets";

const { clients } = storeToRefs(useClientsStore());
const { loadClients } = useClientsStore();

onMounted(() => {
  loadClients();
});
</script>

<template>
  <a-flex class="clients-page" align="center" vertical>
    <BaseContainer class="base-container">
      <span class="title">CRM - Клиенты</span>
    </BaseContainer>

    <a-flex class="page-info-container" justify="space-between" align="center">
      <ClientsCount />
      <AddClientTrigger />
    </a-flex>

    <a-flex class="clients-list">
      <ClientCard v-for="client in clients" :client="client" />
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.clients-page {
  width: 100%;
  gap: 50px;
}

.base-container {
  width: fit-content !important;
  padding: 40px !important;

  .title {
    font-size: 44px;
  }
}

.page-info-container {
  width: 100%;
}

.clients-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
