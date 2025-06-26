<script lang="ts" setup>
import { computed } from "vue";
import { BaseContainer } from "@/shared/ui/Other";
import { useManagersStore } from "@/entities/managers";
import { EditManagerForm } from "@/features/Forms/EditManager";

const { getManagerById } = useManagersStore();

const { managerId } = defineProps<{ managerId: string }>();
const currentManager = computed(() => getManagerById(managerId.toString()));
</script>

<template>
  <BaseContainer class="base-container">
    <span class="title"> {{ currentManager?.name }}</span>
    <EditManagerForm class="manager-form" :managerId />
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  flex-direction: column;
  width: 45%;
  align-items: start;
  padding: 20px 40px;
}

.manager-form {
  width: 100%;
  display: flex;
  align-items: center;
}

.title {
  font-size: 28px;
}

.content {
  font-size: 20px;
}
</style>
