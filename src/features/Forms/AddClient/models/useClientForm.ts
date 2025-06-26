import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { defaultClientForm } from "@/shared/constants";
import { PickKeysWithType, RemoveKeys } from "@/shared/utils";
import { useSessionStore } from "@/entities/auth";
import { Client, useClientsStore } from "@/entities/clients";
import { ClientFormState } from "./ClientFormState";

type RawKeys = PickKeysWithType<Client, string>;

type FinalKeys = RemoveKeys<
  RawKeys & string,
  "id" | "managerId" | "status" | "phone"
>;

export const useClientForm = () => {
  const { user } = useSessionStore();
  const { addClient } = useClientsStore();

  const formState = ref<ClientFormState>({ ...defaultClientForm });
  const loading = ref<boolean>(false);

  const clientPlaceholders: Record<FinalKeys, string> = {
    name: "Введите имя клиента",
    email: "Введите почту клиента",
  };

  const restoreForm = () => Object.assign(formState.value, defaultClientForm);

  const onFinish = (val: ClientFormState) => {
    loading.value = true;

    try {
      const client: Client = {
        id: uuidv4(),
        managerId: user!.id,
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

  return {
    formState,
    loading,
    clientPlaceholders,
    restoreForm,
    onFinish,
    onFinishFailed,
  };
};
