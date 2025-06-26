<script lang="ts" setup>
import { ChangeOwnerForm } from "@/features/Forms/ChangeOwner";
import { Role } from "@/shared/types";

const open = defineModel<boolean>("open", { required: true });
defineProps<{ role: Role | null }>();
const emit = defineEmits<{ (e: "reset"): void; (e: "update"): void }>();
</script>

<template>
  <a-modal v-model:open="open" :footer="null" centered>
    <a-flex class="modal-body" align="center" vertical>
      <a-flex align="center" gap="5" vertical>
        <span class="title">Передача прав</span>
        <span class="subtitle">
          Выберите администратора, который станет новым владельцем
        </span>
      </a-flex>
      <ChangeOwnerForm
        v-model:open="open"
        :role
        @update="emit('update')"
        @reset="emit('reset')"
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

.subtitle {
  font-size: 16px;
  text-align: center;
}
</style>
