import { computed } from "vue";
import { useSessionStore } from "@/entities/auth";
import { storeToRefs } from "pinia";

export const useRoles = () => {
  const { user } = storeToRefs(useSessionStore());

  const isOwner = computed(() => user.value?.role === "owner");
  const isAdmin = computed(() => user.value?.role === "admin");
  const isHighPermission = computed(() => isOwner.value || isAdmin.value);
  const isManager = computed(() => user.value?.role === "manager");

  const roleSign = computed(() =>
    isOwner.value ? "O" : isAdmin.value ? "A" : "M"
  );

  const canEditUserRole = computed(() => isHighPermission);

  const canDeleteClient = (clientManagerId: string): boolean => {
    return isHighPermission.value || user.value?.id === clientManagerId;
  };

  const canEditClient = (clientManagerId: string): boolean => {
    return isHighPermission.value || user.value?.id === clientManagerId;
  };

  const canViewClient = (clientManagerId: string): boolean => {
    return isHighPermission.value || user.value?.id === clientManagerId;
  };

  return {
    isOwner,
    isAdmin,
    isHighPermission,
    isManager,
    roleSign,
    canEditUserRole,
    canDeleteClient,
    canEditClient,
    canViewClient,
  };
};
