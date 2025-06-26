// src/types/router.d.ts

import { Role } from "@/shared/types";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    requiresRole?: Role[];
    layout?: "main" | "auth";
    titleKey?: string;
  }
}
