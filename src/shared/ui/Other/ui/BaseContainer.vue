<script lang="ts" setup>
defineProps<{ fullW?: boolean; shadow?: boolean }>();
</script>

<template>
  <div
    :class="['base-container', { shadow }]"
    :style="{ width: fullW ? '100%' : 'fit-content' }"
  >
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
  transition: 0.2s ease-in-out;

  &.shadow {
    &:hover {
      box-shadow: var(--hover-shadow);
    }
  }
}
</style>
