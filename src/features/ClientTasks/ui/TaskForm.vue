<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useClientsStore } from "@/entities/clients";
import { computed } from "vue";

const { getClient } = useClientsStore();

const route = useRoute();

const clientId = route.params.id;
const currentClient = computed(() => getClient(clientId.toString()));
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
