<script setup lang="ts"></script>

<template>
  <div class="main-layout-wrapper">
    <div class="main-layout">
      <slot />
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
  min-height: 100vh;
  padding: 60px;
  height: fit-content;
  background-color: #f8f8f8;

  .main-layout {
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
