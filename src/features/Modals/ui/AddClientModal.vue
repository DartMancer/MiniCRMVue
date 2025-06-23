<script lang="ts" setup>
import { ref, watch } from "vue";
import { AddClientForm } from "@/features/Forms/AddClient";

const open = defineModel<boolean>("open", { required: true });
const formRef = ref<InstanceType<typeof AddClientForm> | null>(null);

watch(open, (val) => {
  if (!val) return;
  requestAnimationFrame(() => formRef.value?.focusOnFirstInput());
});
</script>

<template>
  <a-modal v-model:open="open" :footer="null" centered>
    <a-flex class="modal-body" align="center" vertical>
      <span class="title">Добавить клиента</span>
      <AddClientForm ref="formRef" @closeModal="open = false" />
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
