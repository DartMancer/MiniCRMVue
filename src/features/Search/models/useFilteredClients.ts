import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useClientsStore } from "@/entities/clients";
import { useSearch } from "@/features/Search";

export const useFilteredClients = () => {
  const { clients } = storeToRefs(useClientsStore());
  const { value: search } = useSearch();

  const filtered = computed(() => {
    const q = search.value.trim().toLowerCase();
    if (!q) return clients.value;

    return clients.value.filter((client) => {
      return ["name", "email", "phone"].some((key) => {
        const val = client[key as keyof typeof client];
        return typeof val === "string" && val.toLowerCase().includes(q);
      });
    });
  });

  return { filtered };
};
