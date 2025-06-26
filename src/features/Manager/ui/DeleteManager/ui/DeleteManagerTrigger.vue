<script setup lang="ts">
import { ref } from "vue";
import { BaseButton } from "@/shared/ui/Button";
import { DeleteManagerModal } from "@/features/Modals";

const { managerId } = defineProps<{ managerId: string }>();

const open = ref<boolean>(false);

const openModal = () => (open.value = true);
</script>

<template>
  <div>
    <BaseButton text="Удалить" error @click.stop="openModal" />
    <DeleteManagerModal v-model:open="open" :managerId />
  </div>
</template>
