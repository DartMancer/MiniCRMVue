import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "client-page",
    meta: { titleKey: "client-page", layout: "main" },
    component: () => import("@/pages/ClientsPage.vue"),
  },
];
