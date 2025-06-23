import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const layouts = {
  auth: defineAsyncComponent(() => import("../ui/AuthLayout.vue")),
  main: defineAsyncComponent(() => import("../ui/MainLayout.vue")),
};

export function useLayout() {
  const route = useRoute();

  // Получение лейаута
  const layout = computed(() => {
    const layoutName = route.meta.layout as keyof typeof layouts;
    return layouts[layoutName] ?? layouts.main;
  });

  return { layout };
}
