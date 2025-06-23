import { computed, readonly } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { Client, Task } from "../models";

export const useClientsStore = defineStore("clients", () => {
  const clients = useStorage<Client[]>("clients", []);
  const clientCount = computed(() => clients.value.length);

  const getClientById = (id: string) => {
    return clients.value.find((c) => c.id === id);
  };

  const addClient = (client: Client) => clients.value.push(client);

  const removeClient = (id: string) => {
    clients.value = clients.value.filter((c) => c.id !== id);
  };

  const addTask = (id: string, task: Task) => {
    getClientById(id)?.tasks.push(task);
  };

  return {
    clients: readonly(clients),
    clientCount,
    getClient: getClientById,
    addClient,
    removeClient,
    addTask,
  };
});
