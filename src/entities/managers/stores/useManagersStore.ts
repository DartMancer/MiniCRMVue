import { computed, readonly } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { StoredUser } from "@/entities/auth";
import { useClientsStore } from "@/entities/clients";

export const useManagersStore = defineStore("managers", () => {
  const managers = useStorage<StoredUser[]>("users", []);

  const managersCount = computed(() => {
    return managers.value.filter((m) => m.role === "manager").length;
  });

  const managersClientsCount = computed(() => (managerId: string) => {
    const { clients } = useClientsStore();
    return clients.filter((c) => c.managerId === managerId).length;
  });

  const getManagerById = (id: string) => {
    return managers.value.find((c) => c.id === id);
  };

  const removeManager = (id: string) => {
    const { clients } = useClientsStore();
    const { removeClient } = useClientsStore();

    managers.value = managers.value.filter((m) => m.id !== id);

    clients.forEach((c) => {
      if (c.managerId === id) removeClient(c.id);
    });
  };

  return {
    managers: readonly(managers),
    managersCount,
    managersClientsCount,
    getManagerById,
    removeManager,
  };
});
