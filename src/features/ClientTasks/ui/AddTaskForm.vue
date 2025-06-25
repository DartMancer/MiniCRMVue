<script lang="ts" setup>
import { BaseButton } from "@/shared/ui/Button";
import { useAddTask } from "../model";

const { clientId } = defineProps<{ clientId: string }>();

const { taskName, disabledBtn, addNewTask } = useAddTask();
</script>

<template>
  <a-flex class="add-task-container">
    <a-input
      v-model:value="taskName"
      class="input"
      placeholder="Введите название задачи"
    />
    <BaseButton
      text="Добавить задачу"
      :disabled="disabledBtn"
      @click="addNewTask(clientId)"
      success
    />
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
}
</style>
