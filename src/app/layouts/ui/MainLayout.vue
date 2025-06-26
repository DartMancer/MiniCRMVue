<script setup lang="ts">
import { AppHeader } from "@/widgets/Header";
</script>

<template>
  <div>
    <AppHeader />
    <div class="main-layout-wrapper">
      <div class="main-layout">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-layout-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 75px);
  padding: 60px;
  height: fit-content;
  background-color: var(--background-color);

  .main-layout {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 50px;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    padding-bottom: 40px;
  }
}

@media (max-width: 1024px) {
  .main-layout-wrapper {
    justify-content: flex-start;
  }
}

@media (max-width: 540px) {
  .main-layout-wrapper {
    .main-layout {
      padding-bottom: 20px;
    }
  }
}
</style>
