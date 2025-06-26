<script lang="ts" setup>
import { BaseContainer } from "@/shared/ui/Other";
import { ManagersCount } from "@/features/Manager";
import { Search, useFiltered } from "@/features/Search";
import { ManagerCard } from "@/widgets/ManagerCard";

const { useManagerSearch, useAdminsSearch } = useFiltered();
const { searchAdmins, filteredAdmins } = useAdminsSearch();
const { searchManagers, filteredManagers } = useManagerSearch();
</script>

<template>
  <a-flex class="managers-page" vertical>
    <a-flex class="managers-section" align="center" vertical>
      <a-flex gap="20" vertical>
        <BaseContainer class="base-container">
          <span class="title">CRM - Администраторы</span>
        </BaseContainer>
        <Search v-model:value="searchAdmins" />
      </a-flex>

      <a-flex
        class="page-info-container"
        justify="space-between"
        align="center"
      >
        <ManagersCount />
      </a-flex>

      <a-flex class="clients-list">
        <ManagerCard v-for="admins in filteredAdmins" :manager="admins" />
      </a-flex>
    </a-flex>
    <a-divider />
    <a-flex class="managers-section" align="center" vertical>
      <a-flex gap="20" vertical>
        <BaseContainer class="base-container">
          <span class="title">CRM - Менеджеры</span>
        </BaseContainer>
        <Search v-model:value="searchManagers" />
      </a-flex>

      <a-flex
        class="page-info-container"
        justify="space-between"
        align="center"
      >
        <ManagersCount />
      </a-flex>

      <a-flex class="clients-list">
        <ManagerCard v-for="manager in filteredManagers" :manager="manager" />
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.managers-page {
  width: 100%;
  gap: 50px;
}

.managers-section {
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

:deep(.ant-divider) {
  border-block-start-color: var(--hover-primary-color);
  box-shadow: var(--shadow);
}
</style>
