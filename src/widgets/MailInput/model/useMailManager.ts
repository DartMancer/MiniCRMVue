import { ref } from "vue";

const options = ref<{ value: string }[]>([]);

export const useMailManager = () => {
  const handleSearch = (val: string) => {
    let res: { value: string }[];
    if (!val || val.includes("@")) {
      res = [];
    } else {
      res = ["mail.ru", "yandex.ru", "gmail.com"].map((domain) => ({
        value: `${val}@${domain}`,
      }));
    }
    options.value = res;
  };

  return {
    options,
    handleSearch,
  };
};
