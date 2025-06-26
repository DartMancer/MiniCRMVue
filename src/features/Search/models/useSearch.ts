import { ref } from "vue";

const value = ref<string>("");

export const useSearch = () => {
  return { value };
};
