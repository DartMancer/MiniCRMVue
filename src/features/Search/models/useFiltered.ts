import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSearchList } from "@/shared/composables";
import { useClientsStore } from "@/entities/clients";
import { useUserApiMock } from "@/entities/user";

export const useFiltered = () => {
  const { clients } = storeToRefs(useClientsStore());
  const { getAdmins, getManagers } = useUserApiMock();

  const useManagerSearch = () => {
    const searchManagers = ref("");
    const managers = getManagers;

    const filteredManagers = useSearchList(managers, searchManagers, [
      "name",
      "email",
    ]);

    return { searchManagers, filteredManagers };
  };

  const useAdminsSearch = () => {
    const searchAdmins = ref("");
    const admins = getAdmins;

    const filteredAdmins = useSearchList(admins, searchAdmins, [
      "name",
      "email",
    ]);

    return { searchAdmins, filteredAdmins };
  };

  const useClientsSearch = () => {
    const searchClients = ref("");
    const clientsF = ref([...clients.value]);

    const filteredClients = useSearchList(clientsF, searchClients, [
      "name",
      "email",
    ]);

    return { searchClients, filteredClients };
  };

  return { useManagerSearch, useAdminsSearch, useClientsSearch };
};
