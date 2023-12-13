import { z } from "zod";

export const groupSchema = z.object({
  group_seq: z.coerce.number(),
  name: z.string().default("새 그룹"),
});

export type TGroupSchema = z.infer<typeof groupSchema>;

export const getGroupSchema = groupSchema.pick({ group_seq: true });
export const insertGroupSchema = groupSchema.pick({ group_seq: true });
