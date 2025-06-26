<script lang="ts" setup>
import { useRoute } from "vue-router";
import { BackButton } from "@/shared/ui/Button";
import { BaseContainer } from "@/shared/ui/Other";
import { ClientsList } from "@/features/Manager";
import {
  ManagerDetailContact,
  ManagerDetailInfo,
  ManagerClientsTitle,
} from "@/widgets/ManagerDetail";

const route = useRoute();

const managerId = route.params.id.toString();
</script>

<template>
  <a-flex class="client-page" vertical>
    <BackButton />
    <a-flex class="client-info-container" align="center">
      <ManagerDetailInfo :managerId />
      <ManagerDetailContact :managerId />
    </a-flex>

    <BaseContainer class="base-container">
      <ManagerClientsTitle :managerId />
      <ClientsList :managerId />
    </BaseContainer>
  </a-flex>
</template>

<style lang="scss" scoped>
.client-page {
  width: 100%;
  gap: 40px;
  padding-top: 40px;
}

.base-container {
  flex-direction: column;
  width: 45% !important;
  align-items: start;
  padding: 20px 40px;
}

.client-info-container {
  width: 100%;
  gap: 40px;
  align-items: start;
}
</style>
