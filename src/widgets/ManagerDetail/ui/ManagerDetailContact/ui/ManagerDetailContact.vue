<script lang="ts" setup>
import { computed } from "vue";
import { BaseContainer } from "@/shared/ui/Other";
import { useManagersStore } from "@/entities/managers";

const { getManagerById } = useManagersStore();

const { managerId } = defineProps<{ managerId: string }>();
const currentManager = computed(() => getManagerById(managerId.toString()));
</script>

<template>
  <BaseContainer class="base-container">
    <span class="title"> Контактная информация</span>
    <span class="content"> Email: {{ currentManager?.email }}</span>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  flex-direction: column;
  width: 45%;
  align-items: start;
  padding: 20px 40px;
}

.title {
  font-size: 28px;
}

.content {
  font-size: 20px;
}
</style>
