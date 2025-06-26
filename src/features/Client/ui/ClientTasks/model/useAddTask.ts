import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Task, useClientsStore } from "@/entities/clients";
import { useSessionStore } from "@/entities/auth";

export const useAddTask = () => {
  const { user } = useSessionStore();
  const { addTask } = useClientsStore();

  const disabledBtn = computed(() => !taskName.value.trim());

  const taskName = ref<string>("");

  const addNewTask = (clientId: string) => {
    const newTask: Task = {
      id: uuidv4(),
      managerId: user!.id,
      clientId: clientId,
      text: taskName.value,
      completed: false,
    };

    addTask(clientId, newTask);
    taskName.value = "";
  };

  return { taskName, disabledBtn, addNewTask };
};
