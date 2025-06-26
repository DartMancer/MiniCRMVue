<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ChevronLeft } from "lucide-vue-next";

const router = useRouter();

const backRouter = () => router.back();
</script>

<template>
  <a-flex justify="flex-start" align="center">
    <a-button class="back-btn" @click="backRouter">
      <ChevronLeft class="icon" />
      <span>Назад</span>
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped>
.back-btn {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: var(--shadow);
}
</style>
