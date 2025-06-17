<script lang="ts" setup>
import { Client } from "@/entities/clients";

const { client } = defineProps<{ client: Client }>();
</script>

<template>
  <a-flex class="client-card" justify="space-between" vertical>
    <span class="title">
      {{ client.name }}
    </span>
    <a-flex class="card-info" vertical>
      <span class="info-text">Статус: {{ client.status }}</span>
      <span class="info-text">Email: {{ client.email }}</span>
    </a-flex>
    <a-flex class="card-actions">
      <a-button class="action-btn delete">
        <span class="action-btn__text open"> Удалить</span>
      </a-button>
      <a-button class="action-btn open">
        <span class="action-btn__text open"> Открыть</span>
      </a-button>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.client-card {
  width: 100%;
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
    }
  }
}
</style>
