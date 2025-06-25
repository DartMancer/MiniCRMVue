import { computed } from "vue";
import { useSessionStore } from "@/entities/auth";

export const useRoles = () => {
  const { user } = useSessionStore();

  const isAdmin = computed(() => user?.role === "admin");
  const isManager = computed(() => user?.role === "manager");

  return { isAdmin, isManager };
};
