import { Ref } from "vue";
import { storeToRefs } from "pinia";
import { Response } from "@/shared/types";
import {
  downloadFile,
  errorMessage,
  readJsonFile,
  successMessage,
} from "@/shared/utils";
import { ClientArraySchema, useClientsStore } from "@/entities/clients";

export const useClientImportExport = (open: Ref<boolean>) => {
  const { clients } = storeToRefs(useClientsStore());
  const { setClients } = useClientsStore();

  const exportClients = () => {
    const json = JSON.stringify(clients.value, null, 2);
    downloadFile(json, `clients-${new Date().toISOString()}.json`);
  };

  const importClients = async (file: File): Promise<Response> => {
    try {
      const data = await readJsonFile<unknown>(file);
      const parsed = ClientArraySchema.parse(data);
      const result = setClients(parsed);

      successMessage(
        `Было добавлено файлов: ${result.added}. Всего файлов: ${result.total}.`
      );
      open.value = false;
      return { success: true };
    } catch (e) {
      errorMessage("Файл повреждён или структура неверна");
      return { success: false };
    }
  };

  const customRequest = ({ file }: any) => {
    importClients(file);
    return false;
  };

  return { exportClients, customRequest };
};
