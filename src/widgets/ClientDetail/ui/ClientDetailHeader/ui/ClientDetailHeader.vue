<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ChevronLeft } from "lucide-vue-next";

const router = useRouter();

const backRouter = () => router.back();
</script>

<template>
  <a-flex class="page-header">
    <a-flex class="back-btn-container" justify="flex-start" align="center">
      <a-button class="back-btn" @click="backRouter">
        <ChevronLeft class="icon" />
        <span class="">Назад</span>
      </a-button>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  gap: 40px;
  align-items: center;
}

.back-btn-container {
  .back-btn {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    box-shadow: var(--shadow);
  }
}
</style>
