import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useSessionStore } from "@/entities/auth";
import { storeToRefs } from "pinia";

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const { user, isLoggedIn } = storeToRefs(useSessionStore());

  const publicPages = ["/login", "/registration", "/"];
  const isPublic = publicPages.includes(to.path);

  if (!isPublic && !isLoggedIn.value) return "/login";
  if (isPublic && isLoggedIn.value) return "/clients";
  if (to.meta.requiresAuth && !user.value) return "/login";
  if (
    to.meta.requiresRole &&
    user.value &&
    user.value.role !== to.meta.requiresRole
  ) {
    return "/forbidden";
  }

  return true;
});
