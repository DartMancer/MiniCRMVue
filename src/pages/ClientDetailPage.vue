<script lang="ts" setup>
import { onMounted } from "vue";
import { BaseContainer } from "@/shared";
import { useClientsStore } from "@/entities/clients";
import {
  ClientDetailContact,
  ClientDetailHeader,
  ClientDetailInfo,
} from "@/widgets/ui/ClientDetail";
import { AddTaskForm, TaskForm } from "@/features/ClientTasks";

const { loadClients } = useClientsStore();

onMounted(() => {
  loadClients();
});
</script>

<template>
  <a-flex class="client-page" vertical>
    <ClientDetailHeader />
    <a-flex class="client-info-container" align="center">
      <ClientDetailInfo />
      <ClientDetailContact />
    </a-flex>

    <BaseContainer class="base-container">
      <span class="title"> Список задач</span>
      <TaskForm />
      <AddTaskForm />
    </BaseContainer>
  </a-flex>
</template>

<style lang="scss" scoped>
.client-page {
  width: 100%;
  gap: 40px;
}

.base-container {
  flex-direction: column;
  width: 45%;
  align-items: start;
  padding: 20px 40px;
}

.client-info-container {
  width: 100%;
  gap: 40px;
  align-items: start;
}

.title {
  font-size: 28px;
}
</style>
