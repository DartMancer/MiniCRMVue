<script lang="ts" setup>
import { BaseContainer } from "@/shared/ui/Other";
import { useUserApiMock } from "@/entities/user";
import { ManagersCount } from "@/features/Manager";
import { ManagerCard } from "@/widgets/ManagerCard";

const { getAdmins, getManagers } = useUserApiMock();
</script>

<template>
  <a-flex class="managers-page" vertical>
    <a-flex class="managers-section" align="center" vertical>
      <BaseContainer class="base-container">
        <span class="title">CRM - Администраторы</span>
      </BaseContainer>

      <a-flex
        class="page-info-container"
        justify="space-between"
        align="center"
      >
        <ManagersCount />
      </a-flex>

      <a-flex class="clients-list">
        <ManagerCard v-for="admins in getAdmins" :manager="admins" />
      </a-flex>
    </a-flex>
    <a-divider />
    <a-flex class="managers-section" align="center" vertical>
      <BaseContainer class="base-container">
        <span class="title">CRM - Менеджеры</span>
      </BaseContainer>

      <a-flex
        class="page-info-container"
        justify="space-between"
        align="center"
      >
        <ManagersCount />
      </a-flex>

      <a-flex class="clients-list">
        <ManagerCard v-for="manager in getManagers" :manager="manager" />
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
