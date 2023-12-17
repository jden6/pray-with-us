import { z } from "zod";
import dayjs from "dayjs";
import { userSchema } from "@/schemas/user.schema";

export const praySchema = z.object({
  pray_seq: z.coerce.number(),
  title: z.string(),
  content: z.string(),
  user_seq: z.coerce.number(),
  created_at: z
    .union([z.date().default(new Date(dayjs().valueOf())), z.string()])
    .optional(),
  updated_at: z
    .union([z.date().default(new Date(dayjs().valueOf())), z.string()])
    .optional(),
  delete_yn: z.string().optional().default("N"),
  t_users: userSchema.optional(),
});

export type TPraySchema = z.infer<typeof praySchema>;

export const TPrayCreateSchema = praySchema.pick({
  content: true,
});

export const TPrayUpdateSchema = praySchema.pick({
  pray_seq: true,
  content: true,
});

export type TPrayView = z.infer<typeof praySchema>;
