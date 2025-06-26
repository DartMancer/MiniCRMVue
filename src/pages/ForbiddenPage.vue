<script setup lang="ts">
import { BackButton } from "@/shared/ui/Button";
import { AccessDenied } from "@/widgets/AccessDenied";
</script>

<template>
  <div class="forbidden-page">
    <BackButton class="back-btn" />
    <AccessDenied />
  </div>
</template>

<style lang="scss" scoped>
.forbidden-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 235px);
}
</style>
