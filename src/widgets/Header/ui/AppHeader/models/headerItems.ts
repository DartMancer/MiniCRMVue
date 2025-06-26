import { Role } from "@/shared/types";

interface HeaderItems {
  title: string;
  path: string;
  role: Role[];
}

export const HEADER_ITEMS: HeaderItems[] = [
  { title: "Менеджеры", path: "/managers", role: ["owner", "admin"] },
  { title: "Клиенты", path: "/clients", role: ["owner", "admin", "manager"] },
  { title: "Статистика", path: "/stats", role: ["owner", "admin"] },
];
