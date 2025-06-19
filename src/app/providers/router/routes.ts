import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "clients",
    meta: { titleKey: "clients", layout: "main" },
    component: () => import("@/pages/ClientsPage.vue"),
  },
  {
    path: "/client/:id",
    name: "client",
    meta: { titleKey: "client", layout: "main" },
    component: () => import("@/pages/ClientDetailPage.vue"),
  },
];
