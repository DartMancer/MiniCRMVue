import { ref } from "vue";
import { ClientFormState } from "./RegistrationFormState";

export const useClientForm = () => {
  const formState = ref<ClientFormState>({
    name: "",
    email: "",
  });

  const loading = ref<boolean>(false);

  return { formState, loading };
};
