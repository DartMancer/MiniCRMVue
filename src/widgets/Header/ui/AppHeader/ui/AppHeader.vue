<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { User } from "lucide-vue-next";
import { useSessionStore } from "@/entities/auth";
import { useRouter } from "vue-router";

const { isLoggedIn } = storeToRefs(useSessionStore());

const router = useRouter();

const routeTo = (path: string) => router.push(path);
</script>

<template>
  <header class="header">
    <a-flex class="header-body" justify="space-between">
      <span class="title" @click="routeTo('/')"> MiniCRM </span>

      <a-button
        v-if="isLoggedIn"
        class="login-btn"
        @click="routeTo('/account')"
      >
        <User />
      </a-button>
      <a-button v-else class="account-btn" @click="routeTo('/login')">
        <span class="btn-text">Вход</span>
      </a-button>
    </a-flex>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 15px 20px;
  background-color: var(--background-color);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);

  .header-body {
    width: 100%;
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border-radius: 50px;
    border-color: rgba($color: #000000, $alpha: 0.3);
    background-color: var(--background-color);
    transition: 0.2s ease-in-out;

    &:hover {
      border-color: var(--hover-primary-color);
      box-shadow: var(--shadow);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .account-btn {
    padding: 0 20px;
    border-radius: 20px;
    border-color: var(--hover-primary-color);
    background-color: var(--background-color);
    box-shadow: var(--shadow);

    .btn-text {
      font-size: 16px;
    }
  }

  .title {
    cursor: pointer;
    font-size: 25px;
  }
}
</style>
