import { computed, readonly } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore, storeToRefs } from "pinia";
import { useSessionStore } from "@/entities/auth";
import { Client, Task } from "../models";
import { useRoles } from "@/entities/user";

export const useClientsStore = defineStore("clients", () => {
  const clients = useStorage<Client[]>("clients", []);
  const clientCount = computed(() => {
    const { user } = storeToRefs(useSessionStore());
    const { isHighPermission } = useRoles();
    return clients.value.filter(
      (c) => isHighPermission.value || c.managerId === user.value?.id
    ).length;
  });

  const getClientById = (id: string) => {
    return clients.value.find((c) => c.id === id);
  };

  const addClient = (client: Client) => {
    clients.value = [...clients.value, client];
  };

  const setClients = (imported: Client[]) => {
    const existingIds = new Set(clients.value.map((c) => c.id));
    const newClients = imported.filter((c) => !existingIds.has(c.id));

    if (newClients.length > 0) {
      clients.value = [...clients.value, ...newClients];
    }

    return {
      added: newClients.length,
      total: imported.length,
    };
  };

  const removeClient = (id: string) => {
    clients.value = clients.value.filter((c) => c.id !== id);
  };

  const addTask = (id: string, task: Task) => {
    const client = getClientById(id);
    if (!client) return;

    client.tasks = [...client.tasks, task];
  };

  return {
    clients: readonly(clients),
    clientCount,
    getClientById,
    addClient,
    setClients,
    removeClient,
    addTask,
  };
});
