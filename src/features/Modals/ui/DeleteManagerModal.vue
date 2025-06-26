<script lang="ts" setup>
import { BaseButton } from "@/shared/ui/Button";
import { useManagersStore } from "@/entities/managers";

const { removeManager } = useManagersStore();

const { managerId } = defineProps<{ managerId: string }>();

const open = defineModel<boolean>("open", { required: true });

const handleRemove = () => {
  removeManager(managerId);
  open.value = false;
};
</script>

<template>
  <a-modal v-model:open="open" :footer="null" centered>
    <a-flex class="modal-body" align="center" vertical>
      <a-flex align="center" gap="10" vertical>
        <span class="title">Вы уверены?</span>
        <span class="subtitle">
          Удаление приведет к удалению всех связанных с ним клиентов
        </span>
      </a-flex>

      <BaseButton
        text="Да, я хочу удалить менеджера"
        @click="handleRemove"
        error
      />
    </a-flex>
  </a-modal>
</template>

<style lang="scss" scoped>
.modal-body {
  width: 100%;
  gap: 30px;
  padding: 30px 60px;
}

.title {
  font-size: 24px;
}

.subtitle {
  font-size: 16px;
  text-align: center;
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
