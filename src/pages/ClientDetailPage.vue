<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import { ChevronLeft } from "lucide-vue-next";
import { BaseContainer } from "@/shared";
import { Client, Task } from "@/entities/clients";

const route = useRoute();
const router = useRouter();

const clientId = route.params.id;

const clients = ref<Client[]>([]);
const taskName = ref<string>("");

const currentClient = computed(() =>
  clients.value.find((c) => c.id === clientId)
);
const disabledBtn = computed(() => !taskName.value.trim());

const addNewTask = () => {
  const newTask: Task = {
    id: uuidv4(),
    text: taskName.value,
    completed: false,
  };

  currentClient.value?.tasks.push(newTask);
  taskName.value = "";
};

const backRouter = () => router.back();

watch(
  clients,
  (val) => {
    localStorage.setItem("clients", JSON.stringify(val));
  },
  { deep: true }
);

onMounted(() => {
  const storedClients = localStorage.getItem("clients");
  if (storedClients) clients.value = JSON.parse(storedClients);
});
</script>

<template>
  <a-flex class="client-page" vertical>
    <a-flex class="page-header">
      <a-flex class="back-btn-container" justify="flex-start" align="center">
        <a-button class="back-btn" @click="backRouter">
          <ChevronLeft class="icon" />
          <span class="">Назад</span>
        </a-button>
      </a-flex>
    </a-flex>

    <a-flex class="client-info-container" align="center">
      <BaseContainer class="base-container">
        <span class="title"> {{ currentClient?.name }}</span>
        <span class="content"> Статус: {{ currentClient?.status }}</span>
      </BaseContainer>
      <BaseContainer class="base-container">
        <span class="title"> Контактная информация</span>
        <span class="content"> Email: {{ currentClient?.email }}</span>
        <span v-if="currentClient?.phone" class="content">
          Телефон: {{ currentClient?.phone }}
        </span>
      </BaseContainer>
    </a-flex>

    <BaseContainer class="base-container">
      <span class="title"> Список задач</span>

      <a-flex gap="10" vertical>
        <a-checkbox
          v-if="currentClient?.tasks.length"
          v-for="task in currentClient?.tasks"
          v-model:checked="task.completed"
        >
          {{ task.text }}
        </a-checkbox>
        <span v-else> Задач пока нет... Добавьте с новую через форму ниже</span>
      </a-flex>

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
    </BaseContainer>
  </a-flex>
</template>

<style lang="scss" scoped>
.client-page {
  width: 100%;
  gap: 40px;
}

.page-header {
  width: 100%;
  gap: 40px;
  align-items: center;
}

.back-btn-container {
  .back-btn {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    box-shadow: var(--shadow);
  }
}

.base-container {
  flex-direction: column;
  width: 45%;
  align-items: start;
  padding: 20px 40px;
}

.client-info-container {
  width: 100%;
  gap: 40px;
  align-items: start;
}

.title {
  font-size: 28px;
}

.content {
  font-size: 20px;
}

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
