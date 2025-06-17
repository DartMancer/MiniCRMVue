import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "clients",
    meta: { titleKey: "clients", layout: "main" },
    component: () => import("@/pages/ClientsPage.vue"),
  },
];
