<script lang="ts" setup>
import { ref } from "vue";
import { DeleteAccountModal } from "@/features/Modals";

const open = ref<boolean>(false);

const openModal = () => (open.value = true);
</script>

<template>
  <div class="delete-acc-container">
    <a-button class="delete-acc-btn" @click="openModal">
      <span class="delete-acc-btn__text">Удалить аккаунт</span>
    </a-button>
    <DeleteAccountModal v-model:open="open" />
  </div>
</template>

<style lang="scss" scoped>
.delete-acc-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.delete-acc-btn {
  width: fit-content;
  height: fit-content;
  padding: 5px 20px;
  border: 1px solid var(--error-color);
  border-radius: 20px;
  background-color: rgba($color: #ff7c7c, $alpha: 0.2);
  box-shadow: var(--shadow);
  transition: 0.2s ease-in-out;

  &__text {
    color: var(--error-color);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    border: 1px solid var(--hover-error-color);
    background-color: rgba($color: #ff7c7c, $alpha: 0.3);

    .delete-acc-btn__text {
      color: var(--hover-error-color);
    }
  }

  &:active {
    border-color: var(--hover-error-color);
    background-color: rgba($color: #ff7c7c, $alpha: 0.3);
    box-shadow: var(--shadow);
    transform: scale(0.95);

    .delete-acc-btn__text {
      color: var(--hover-error-color);
    }
  }
}
</style>
