<script lang="ts" setup>
import { DeepReadonly } from "vue";
import { useRouter } from "vue-router";
import { BaseContainer } from "@/shared/ui/Other";
import { Client, useClientsStore } from "@/entities/clients";
import { BaseButton } from "@/shared/ui/Button";

type ReadonlyClient = DeepReadonly<Client>;

const { removeClient } = useClientsStore();

const { client } = defineProps<{ client: ReadonlyClient }>();

const router = useRouter();

const openClientDetails = () => {
  router.push({ name: "client", params: { id: client.id } });
};
</script>

<template>
  <BaseContainer
    class="base-container"
    @click="openClientDetails"
    full-w
    shadow
  >
    <span class="title">{{ client.name }} </span>
    <a-flex class="card-info" vertical>
      <span class="info-text">Статус: {{ client.status }}</span>
      <span class="info-text">Email: {{ client.email }}</span>
    </a-flex>
    <a-flex class="card-actions">
      <BaseButton text="Удалить" error @click="removeClient(client.id)" />
      <BaseButton text="Открыть" success @click="openClientDetails" />
    </a-flex>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: fit-content;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--element-color);
  box-shadow: var(--shadow);

  .title {
    font-size: 20px;
  }

  .card-info {
    width: 100%;
    gap: 10px;

    .info-text {
      font-size: 16px;
    }
  }

  .card-actions {
    gap: 10px;
  }
}
</style>
