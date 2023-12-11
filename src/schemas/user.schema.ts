import { z } from "zod";

export const userSchema = z.object({
  user_seq: z.coerce.number(),
  name: z.string(),
  email: z.string().email(),
  access_level_seq: z.number().optional().default(21),
  group_seq: z.number().optional().default(1),
  // password: z.string().min(8),
  // passwordConfirmation: z.string().min(8),
});

export type TUser = z.infer<typeof userSchema>;

export const getOneUserSchema = userSchema.pick({
  user_seq: true,
});
export const UserSearchParamSchema = z.object({
  seq: z.coerce.number(),
});
