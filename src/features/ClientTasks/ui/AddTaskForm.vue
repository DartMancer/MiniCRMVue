<script lang="ts" setup>
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Task, useClientsStore } from "@/entities/clients";

const { addTask } = useClientsStore();

const { clientId } = defineProps<{ clientId: string }>();

const disabledBtn = computed(() => !taskName.value.trim());

const taskName = ref<string>("");

const addNewTask = () => {
  const newTask: Task = {
    id: uuidv4(),
    text: taskName.value,
    completed: false,
  };

  addTask(clientId, newTask);
  taskName.value = "";
};
</script>

<template>
  <a-flex class="add-task-container">
    <a-input
      v-model:value="taskName"
      class="input"
      placeholder="Введите название задачи"
    />
    <a-button
      :class="['add-btn', { disabled: disabledBtn }]"
      :disabled="disabledBtn"
      @click="addNewTask"
    >
      <span class="add-btn__text">Добавить задачу</span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.add-task-container {
  width: 100%;
  align-items: center;
  gap: 20px;

  .input {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
  }

  .add-btn {
    height: 100%;
    border-radius: 20px;
    padding: 6px 16px;
    border-color: #5faf20;
    background-color: rgba($color: #5faf20, $alpha: 0.2);
    box-shadow: var(--shadow);
    transition: 0.2s ease-in-out;

    &__text {
      color: #5faf20;
      transition: 0.2s ease-in-out;
    }

    &.disabled {
      border-color: rgba($color: #000000, $alpha: 0.4);
      background-color: rgba($color: #000000, $alpha: 0.1);

      .add-btn__text {
        color: rgba($color: #000000, $alpha: 0.4);
      }
    }
  }
}
</style>
