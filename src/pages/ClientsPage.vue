<script lang="ts" setup>
import { BaseContainer } from "@/shared/ui/Other";
import { Search } from "@/features/Search";
import { ClientsCount, AddClientTrigger } from "@/features/Client";
import { useFiltered } from "@/features/Search";
import { ClientCard } from "@/widgets/ClientCard";

const { useClientsSearch } = useFiltered();
const { searchClients, filteredClients } = useClientsSearch();
</script>

<template>
  <a-flex class="clients-page" align="center" vertical>
    <a-flex gap="20" vertical>
      <BaseContainer class="base-container">
        <span class="title">CRM - Клиенты</span>
      </BaseContainer>
      <Search v-model:value="searchClients" />
    </a-flex>

    <a-flex class="page-info-container" justify="space-between" align="center">
      <ClientsCount />
      <AddClientTrigger />
    </a-flex>

    <a-flex class="clients-list">
      <ClientCard v-for="client in filteredClients" :client="client" />
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.clients-page {
  width: 100%;
  gap: 50px;
}

.base-container {
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
