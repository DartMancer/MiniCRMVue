import { ref } from "vue";
import { ClientFormState } from "./ClientFormState";
import { defaultClientForm } from "@/shared/constants";

export const useClientForm = () => {
  const formState = ref<ClientFormState>(defaultClientForm);
  const loading = ref<boolean>(false);

  return { formState, loading };
};
