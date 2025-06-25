import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { defaultClientForm } from "@/shared/constants";
import { Client, useClientsStore } from "@/entities/clients";
import { ClientFormState } from "./ClientFormState";

export const useClientForm = () => {
  const { addClient } = useClientsStore();

  const formState = ref<ClientFormState>({ ...defaultClientForm });
  const loading = ref<boolean>(false);

  const restoreForm = () => Object.assign(formState.value, defaultClientForm);

  const onFinish = (val: ClientFormState) => {
    loading.value = true;

    try {
      const client: Client = {
        id: uuidv4(),
        name: val.name,
        email: val.email,
        status: "active",
        tasks: [],
      };

      addClient(client);
      restoreForm();
    } finally {
      loading.value = false;
    }
  };

  const onFinishFailed = (value: any) => {
    console.log("Error:", value);
  };

  return { formState, loading, restoreForm, onFinish, onFinishFailed };
};
