<script setup lang="ts">
import { useRouter } from "vue-router";
import { BaseButton } from "@/shared/ui/Button";
import { BaseContainer } from "@/shared/ui/Other";
import { useSessionStore } from "@/entities/auth";

const { logout } = useSessionStore();

const router = useRouter();

const handleLogout = () => {
  router.push("/login");
  logout();
};
</script>

<template>
  <BaseContainer class="base-container" full-w>
    <a-flex class="acc-header-container" justify="space-between">
      <span class="title">Личный кабинет</span>
      <BaseButton text="Выйти из аккаунта" @click="handleLogout" error />
    </a-flex>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.acc-header-container {
  width: 100%;
}

.logout-btn {
  border-radius: 20px;
  border-color: var(--error-color);
  background-color: rgba($color: #ff7c7c, $alpha: 0.2);
  transition: 0.2s ease-in-out;

  .logout {
    color: var(--error-color);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    .logout {
      color: var(--hover-error-color);
    }
  }
}

:deep(.ant-btn-default:not(:disabled):hover) {
  border-color: var(--hover-error-color) !important;
  background-color: rgba($color: #ff7c7c, $alpha: 0.3) !important;
}

.title {
  font-size: 20px;
}
</style>
