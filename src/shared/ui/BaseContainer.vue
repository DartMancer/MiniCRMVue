<template>
  <div class="base-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--element-color);
  box-shadow: var(--shadow);
}
</style>
