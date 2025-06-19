<script lang="ts" setup>
import { Client } from "@/entities/clients";
import { AddClientForm } from "@/features/Forms/AddClient";

const open = defineModel<boolean>("open", { required: true });
defineEmits<{ (e: "addClient", client: Client): void }>();
</script>

<template>
  <a-modal v-model:open="open" :footer="null" centered>
    <a-flex class="modal-body" align="center" vertical>
      <span class="title">Добавить клиента</span>
      <AddClientForm
        @addClient="(client: Client) => $emit('addClient', client)"
        @closeModal="open = false"
      />
    </a-flex>
  </a-modal>
</template>

<style lang="scss" scoped>
.modal-body {
  width: 100%;
  gap: 30px;
}

.title {
  font-size: 24px;
}
</style>
