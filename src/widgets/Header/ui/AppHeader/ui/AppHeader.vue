<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { User } from "lucide-vue-next";
import { useSessionStore } from "@/entities/auth";
import { useRoute, useRouter } from "vue-router";
import { HEADER_ITEMS } from "../models";
import { computed } from "vue";
import { useRoles } from "@/entities/user";

const { user, isLoggedIn } = storeToRefs(useSessionStore());
const { roleSign } = useRoles();

const route = useRoute();
const router = useRouter();

const isActiveRoute = computed(() => (path: string) => {
  return route.path === path;
});

const routeTo = (path: string) => router.push(path);
</script>

<template>
  <header class="header">
    <a-flex class="header-body" justify="space-between">
      <span class="title" @click="routeTo('/')"> MiniCRM </span>

      <a-flex class="header-items" justify="flex-end" align="center">
        <a-flex v-for="item in HEADER_ITEMS">
          <a-button
            v-if="user && item.role.includes(user.role)"
            :class="['header-items__btn', { active: isActiveRoute(item.path) }]"
            type="text"
            :disabled="isActiveRoute(item.path)"
            @click="routeTo(item.path)"
          >
            <span class="title">{{ item.title }}</span>
          </a-button>
        </a-flex>

        <a-button
          v-if="isLoggedIn"
          :class="['login-btn', { active: isActiveRoute('/account') }]"
          @click="routeTo('/account')"
        >
          <User class="icon" />
          <a-flex class="role-sign" justify="center" align="center">
            <span class="title">{{ roleSign }}</span>
          </a-flex>
        </a-button>
        <a-button v-else class="account-btn" @click="routeTo('/login')">
          <span class="btn-text">Вход</span>
        </a-button>
      </a-flex>
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

  .header-items {
    width: 100%;
    gap: 10px;

    .title {
      font-size: 20px;
    }

    &__btn {
      height: fit-content;
      border-radius: 20px;
      padding: 5px 20px;

      &.active {
        cursor: default !important;
        background-color: rgba($color: #000000, $alpha: 0.7);
        box-shadow: var(--shadow);

        .title {
          cursor: default !important;
          color: var(--primary-color);
        }
      }
    }
  }

  .login-btn {
    position: relative;
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

    .role-sign {
      position: absolute;
      right: -5px;
      bottom: -5px;
      width: 25px;
      height: 25px;
      border: 1px solid var(--primary-color);
      border-radius: 50px;
      background-color: rgba($color: #000000, $alpha: 0.7);

      .title {
        font-size: 12px;
        color: var(--primary-color);
      }
    }

    &.active {
      cursor: default !important;
      background-color: rgba($color: #000000, $alpha: 0.7);
      box-shadow: var(--shadow);

      .icon {
        stroke: var(--primary-color);
      }
    }

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
