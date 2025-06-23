<script setup lang="ts">
import { BaseContainer } from "@/shared/ui/Other";
</script>

<template>
  <div class="auth-layout-wrapper">
    <div class="auth-layout">
      <BaseContainer class="base-container">
        <slot />
      </BaseContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-layout-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;

  .auth-layout {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    gap: 50px;
    padding: 60px;
  }
}

.base-container {
  min-width: 400px;
  width: fit-content !important;
  padding: 40px !important;
}

@media (max-width: 1024px) {
  .auth-layout-wrapper {
    justify-content: flex-start;
  }
}

@media (max-width: 540px) {
  .auth-layout-wrapper {
    .auth-layout {
      padding-bottom: 20px;
    }
  }
}
</style>
