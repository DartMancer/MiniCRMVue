<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
import { Client, useClientsStore } from "@/entities/clients";
import { ClientFormState, useClientForm, validateRules } from "../models";
import { ref } from "vue";

const { addClient } = useClientsStore();
const { formState, loading } = useClientForm();

const emit = defineEmits<{ (e: "closeModal"): void }>();

const nameInput = ref<HTMLInputElement | null>(null);

const focusOnFirstInput = () => {
  nameInput.value?.focus();
};

const onFinish = (val: ClientFormState) => {
  loading.value = true;

  try {
    const client: Client = {
      id: uuidv4(),
      name: val.name,
      email: val.email,
      status: "active",
      tasks: [],
    };

    addClient(client);
    emit("closeModal");
    formState.value = { name: "", email: "" };
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (value: any) => {
  console.log("Error:", value);
};

defineExpose({ focusOnFirstInput });
</script>

<template>
  <a-form
    v-model:model="formState"
    class="input-container"
    layout="vertical"
    :rules="validateRules"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex vertical>
      <a-form-item name="name" label="Имя клиента" vertical>
        <a-input
          ref="nameInput"
          v-model:value="formState.name"
          class="input"
          placeholder="Введите имя клиента"
        />
      </a-form-item>
      <a-form-item name="email" label="Почта клиента" vertical>
        <a-input
          v-model:value="formState.email"
          class="input"
          placeholder="Введите почту клиента"
        />
      </a-form-item>
    </a-flex>

    <a-flex class="form-actions" justify="flex-end">
      <a-button class="action-btn delete" @click="emit('closeModal')">
        <span class="action-btn__text open">Отмена</span>
      </a-button>
      <a-button class="action-btn open" html-type="submit" :loading="loading">
        <span class="action-btn__text open">Добавить</span>
      </a-button>
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  padding: 0 30px;
}

.input {
  width: 100%;
  border-radius: 20px;
  border-top-left-radius: 8px;
  border: 2px solid var(--text-color);
  box-shadow: var(--shadow);
}

.form-actions {
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
</style>
