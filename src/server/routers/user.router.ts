import { publicProcedure, router } from "@/server/trpc";
import { supa } from "@/lib/supabase/client";
import { getOneUserSchema, userSchema } from "@/schemas/user.schema";

export const userRouter = router({
  get: publicProcedure.query(async () => {
    return supa().from("t_users").select();
  }),
  getOne: publicProcedure.input(getOneUserSchema).query(async ({ input }) => {
    return supa()
      .from("t_users")
      .select()
      .eq("user_seq", input.user_seq || 0);
  }),
  checkUserByEmail: publicProcedure
    .input(userSchema.pick({ email: true }))
    .query(async ({ input }) => {
      return supa().from("t_users").select().eq("email", input);
    }),
  create: publicProcedure.input(userSchema).mutation(async ({ input }) => {
    const { user_seq, ...rest } = input;
    return supa().from("t_users").insert(rest);
  }),
});
