<script setup lang="ts">
import { BaseContainer } from "@/shared/ui/Other";
import { EditUserForm } from "@/features/Forms/EditUser";
</script>

<template>
  <BaseContainer class="base-container" full-w>
    <span class="title">Информация</span>
    <a-collapse class="collapse">
      <a-collapse-panel class="collapse-items" header="Данные об аккаунте">
        <EditUserForm />
      </a-collapse-panel>
    </a-collapse>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.base-container {
  flex-direction: column;
  align-items: start;
}

.title {
  font-size: 20px;
}

.collapse {
  width: 100%;

  .collapse-items {
    display: flex;
    flex-direction: column;
  }
}
</style>
