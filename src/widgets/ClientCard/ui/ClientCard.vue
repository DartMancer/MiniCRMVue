<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Client, useClientsStore } from "@/entities/clients";
import { DeepReadonly } from "vue";
import { BaseContainer } from "@/shared/ui/Other";

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
      <a-button class="action-btn delete" @click="removeClient(client.id)">
        <span class="action-btn__text open"> Удалить</span>
      </a-button>
      <a-button class="action-btn open" @click="openClientDetails">
        <span class="action-btn__text open"> Открыть</span>
      </a-button>
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

    .action-btn {
      width: fit-content;
      height: fit-content;
      padding: 5px 20px;
      border-radius: 20px;

      &__text {
        font-size: 14px;
      }

      &.open {
        border-color: #5faf20;
        background-color: rgba($color: #5faf20, $alpha: 0.2);

        .action-btn__text {
          color: #5faf20;
        }
      }

      &.delete {
        border-color: #ff7c7c;
        background-color: rgba($color: #ff7c7c, $alpha: 0.2);

        .action-btn__text {
          color: #ff7c7c;
        }
      }

      &:hover {
        &.open {
          background-color: rgba($color: #5faf20, $alpha: 0.3);
        }

        &.delete {
          background-color: rgba($color: #ff7c7c, $alpha: 0.3);
        }
      }
    }
  }
}
</style>
