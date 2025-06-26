<script lang="ts" setup>
import { ref } from "vue";
import { AddClientModal } from "@/features/Modals";

const open = ref<boolean>(false);

const openModal = () => (open.value = true);
</script>

<template>
  <div>
    <a-button class="add-client-btn" @click="openModal">
      <span class="add-client-btn__text title">Добавить клиента</span>
    </a-button>
    <AddClientModal v-model:open="open" />
  </div>
</template>

<style lang="scss" scoped>
.add-client-btn {
  width: fit-content;
  height: fit-content;
  padding: 10px 40px;
  border: none;
  border-radius: 20px;
  background-color: var(--primary-color);
  box-shadow: var(--shadow);

  &__text {
    font-size: 22px;
  }

  &:hover {
    background-color: var(--hover-primary-color);
  }
}
</style>
