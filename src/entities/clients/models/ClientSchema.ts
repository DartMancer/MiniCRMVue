import { z } from "zod";

export const ClientSchema = z.object({
  id: z.string(),
  managerId: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  status: z.enum(["active", "pending", "archived"]),
  tasks: z.array(z.any()), // или полноценная схема
});

export const ClientArraySchema = z.array(ClientSchema);
export type ClientSchema = z.infer<typeof ClientSchema>;
