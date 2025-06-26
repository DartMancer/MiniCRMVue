import { computed } from "vue";
import { useClientsStore } from "@/entities/clients";

export const useClientsList = (managerId: string) => {
  const clients = computed(() => {
    const { clients } = useClientsStore();
    return clients.filter((c) => c.managerId === managerId);
  });

  return {
    clients,
  };
};
