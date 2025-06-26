import type { RouteRecordRaw } from "vue-router";
import { HIGH_PERMISSION } from "@/shared/constants";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    meta: {
      titleKey: "Главная",
      layout: "main",
    },
    component: () => import("@/pages/ActivityPage.vue"),
  },
  {
    path: "/clients",
    name: "clients",
    meta: {
      titleKey: "CRM - Клиенты",
      layout: "main",
    },
    component: () => import("@/pages/ClientsPage.vue"),
  },
  {
    path: "/client/:id",
    name: "client",
    meta: {
      titleKey: "Детализация клиента",
      layout: "main",
    },
    component: () => import("@/pages/ClientDetailPage.vue"),
  },
  {
    path: "/managers",
    name: "managers",
    meta: {
      titleKey: "CRM - Менеджеры",
      layout: "main",
      requiresAuth: true,
      requiresRole: HIGH_PERMISSION,
    },
    component: () => import("@/pages/ManagersPage.vue"),
  },
  {
    path: "/manager/:id",
    name: "manager",
    meta: {
      titleKey: "Детализация менеджера",
      layout: "main",
      requiresAuth: true,
      requiresRole: HIGH_PERMISSION,
    },
    component: () => import("@/pages/ManagerDetailPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {
      titleKey: "Регистрация",
      layout: "auth",
    },
    component: () => import("@/pages/RegistrationPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { titleKey: "Вход", layout: "auth" },
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    path: "/account",
    name: "account",
    meta: { titleKey: "Аккаунт", layout: "main" },
    component: () => import("@/pages/AccountPage.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    meta: {
      titleKey: "Статистика",
      layout: "main",
      requiresAuth: true,
      requiresRole: HIGH_PERMISSION,
    },
    component: () => import("@/pages/StatsPage.vue"),
  },
  {
    path: "/forbidden",
    name: "forbidden",
    meta: { layout: "main" },
    component: () => import("@/pages/ForbiddenPage.vue"),
  },
];
