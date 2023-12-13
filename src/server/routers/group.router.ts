import { publicProcedure, router } from "@/server/trpc";
import {
  getGroupSchema,
  groupSchema,
  insertGroupSchema,
  TGroupSchema,
} from "@/schemas/group.schema";
import { supa } from "@/lib/supabase/client";

export const groupRouter = router({
  getAllGroup: publicProcedure.query(async () => {
    const result = await supa()
      .from("t_group")
      .select()
      .returns<TGroupSchema[]>();
    return result.data;
  }),
  getGroupById: publicProcedure
    .input(getGroupSchema)
    .query(async ({ ctx, input }) => {
      const { group_seq } = input;
      const result = await supa()
        .from("t_group")
        .select()
        .match({ group_seq })
        .single();
      return result.data;
    }),
  createGroup: publicProcedure
    .input(insertGroupSchema)
    .mutation(async ({ input }) => {
      const result = await supa()
        .from("t_group")
        .insert(input)
        .returns<TGroupSchema>()
        .single();
      return result.data;
    }),
  updateGroup: publicProcedure
    .input(groupSchema)
    .mutation(async ({ input }) => {
      const result = await supa()
        .from("t_group")
        .update(input)
        .eq("group_seq", input.group_seq)
        .returns<TGroupSchema>()
        .single();
      return result.data;
    }),
  deleteGroup: publicProcedure
    .input(getGroupSchema)
    .mutation(async ({ ctx, input }) => {
      const { group_seq } = input;
      const result = await supa()
        .from("t_group")
        .delete()
        .match({ group_seq })
        .single();
      return result.data;
    }),
});
