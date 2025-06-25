import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Task, useClientsStore } from "@/entities/clients";

export const useAddTask = () => {
  const { addTask } = useClientsStore();

  const disabledBtn = computed(() => !taskName.value.trim());

  const taskName = ref<string>("");

  const addNewTask = (clientId: string) => {
    const newTask: Task = {
      id: uuidv4(),
      text: taskName.value,
      completed: false,
    };

    addTask(clientId, newTask);
    taskName.value = "";
  };

  return { taskName, disabledBtn, addNewTask };
};
