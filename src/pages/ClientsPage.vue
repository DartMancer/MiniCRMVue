<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import { Client } from "@/entities/clients";
import { ClientCard } from "@/widgets";
import { AddClientModal } from "@/features/Modals";

const clients = ref<Client[]>([
  {
    id: "1",
    name: "Иван Иванов",
    email: "ivan@example.com",
    status: "active",
    tasks: [],
  },
  {
    id: "2",
    name: "Иван Иванов",
    email: "ivan@example.com",
    status: "active",
    tasks: [],
  },
]);

const clientCount = computed(() => clients.value.length);

const open = ref<boolean>(false);

const addClient = (client: Client) => {
  clients.value.push(client);
};

const openModal = () => (open.value = true);

watch(
  clients,
  (val) => {
    localStorage.setItem("clients", JSON.stringify(val));
  },
  { deep: true }
);

onMounted(() => {
  const storedClients = localStorage.getItem("clients");
  if (storedClients) clients.value = JSON.parse(storedClients);
});
</script>

<template>
  <a-flex class="clients-page" align="center" vertical>
    <div class="title-container">
      <span class="title">CRM - Клиенты</span>
    </div>
    <a-flex class="page-info-container" justify="space-between" align="center">
      <a-flex class="clients-count-container">
        <span class="clients-count-container__text">Количество клиентов:</span>
        <span class="clients-count-container__count title">
          {{ clientCount }}
        </span>
      </a-flex>

      <a-button class="add-client-btn" @click="openModal">
        <span class="add-client-btn__text title">Добавить клиента</span>
      </a-button>
      <AddClientModal v-model:open="open" @addClient="addClient" />
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

.title-container {
  width: fit-content;
  height: fit-content;
  padding: 40px;
  border-radius: 20px;
  background-color: var(--element-color);
  box-shadow: var(--shadow);

  .title {
    font-size: 44px;
  }
}

.page-info-container {
  width: 100%;

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

  .add-client-btn {
    width: fit-content;
    height: fit-content;
    padding: 10px 40px;
    border: none;
    border-radius: 20px;
    background-color: var(--primary-color);
    box-shadow: var(--shadow);

    &__text {
      font-size: 22px;
    }
  }
}

.clients-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
