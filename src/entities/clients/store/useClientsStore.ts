import { computed, readonly, ref, toRaw, watch } from "vue";
import { defineStore } from "pinia";
import { Client } from "../models";

export const useClientsStore = defineStore("clients", () => {
  const clients = ref<Client[]>([]);
  const clientCount = computed(() => clients.value.length);

  const loadClients = () => {
    const storedClients = localStorage.getItem("clients");
    if (storedClients) clients.value = JSON.parse(storedClients);
  };

  const getClientById = (id: string) => {
    return clients.value.find((c) => c.id === id);
  };

  const addClient = (client: Client) => clients.value.push(client);

  const removeClient = (id: string) => {
    clients.value = clients.value.filter((c) => c.id !== id);
  };

  watch(
    clients,
    () => localStorage.setItem("clients", JSON.stringify(toRaw(clients.value))),
    { deep: true }
  );

  return {
    clients: readonly(clients),
    clientCount,
    loadClients,
    getClient: getClientById,
    addClient,
    removeClient,
  };
});
