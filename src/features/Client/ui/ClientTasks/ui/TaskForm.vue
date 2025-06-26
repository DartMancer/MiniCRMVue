<script lang="ts" setup>
import { computed } from "vue";
import { useClientsStore } from "@/entities/clients";

const { getClientById } = useClientsStore();

const { clientId } = defineProps<{ clientId: string }>();
const currentClient = computed(() => getClientById(clientId.toString()));
</script>

<template>
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
</template>
