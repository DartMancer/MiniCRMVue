import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "clients",
    meta: { titleKey: "CRM - Клиенты", layout: "main" },
    component: () => import("@/pages/ClientsPage.vue"),
  },
  {
    path: "/client/:id",
    name: "client",
    meta: { titleKey: "Детализация", layout: "main" },
    component: () => import("@/pages/ClientDetailPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: { titleKey: "Регистрация", layout: "auth" },
    component: () => import("@/pages/RegistrationPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { titleKey: "Вход", layout: "auth" },
    component: () => import("@/pages/LoginPage.vue"),
  },
];
