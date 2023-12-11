import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";
import { supa } from "@/lib/supabase/client";
import {
  praySchema,
  TPrayCreateSchema,
  TPrayUpdateSchema,
  TPrayView,
} from "@/schemas/pray.schema";

export const prayRouter = router({
  get: publicProcedure.query(async () => {
    return supa().from("t_pray").select();
  }),
  getAllRecentPray: publicProcedure.query(async () => {
    return supa()
      .from("t_pray")
      .select()
      .order("created_at", { ascending: false })
      .limit(10);
  }),
  getGroupPrayList: publicProcedure.query(async ({ ctx }) => {
    try {
      const response = await supa()
        .from("t_pray")
        .select(
          `
          *,
          t_users (
            name,
            group_seq
          )
        `,
        )
        .match({ "t_users.group_seq": ctx.user.group_seq })
        .returns<TPrayView[]>();
      return response.data || ([] as TPrayView[]);
    } catch (e) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "기도제목을 가져오는데 실패했습니다.",
      });
    }
  }),
  getMyPrayList: publicProcedure.query(async ({ ctx }) => {
    const result = await supa()
      .from("t_pray")
      .select()
      .match({ user_seq: ctx.user.user_seq })
      .order("created_at", { ascending: false })
      .returns<TPrayView>();
    return result.data;
  }),
  getUserResentPray: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const { user_seq, group_seq } = ctx.user;
      const result = supa().from("t_pray").select(`
        *,
        t_users (
          group_seq,
          name
        )
      `);
      if (input === "me") {
        return result
          .match({ user_seq })
          .order("created_at", { ascending: false })
          .limit(5);
      }
      if (input === "cell") {
        return result
          .filter("t_users.group_seq", "eq", group_seq)
          .order("created_at", { ascending: false })
          .limit(5);
      }
    }),
  getOne: publicProcedure
    .input(praySchema.shape.pray_seq)
    .query(async ({ input: pray_seq }) => {
      try {
        const response = await supa()
          .from("t_pray")
          .select(`*, t_users (name, group_seq)`)
          .match({ pray_seq })
          .returns<TPrayView>()
          .single();
        return response.data || ({} as TPrayView);
      } catch (e) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "존재하지 않는 기도제목입니다.",
        });
      }
    }),
  getGroupPray: publicProcedure.query(async ({ ctx }) => {
    const { group_seq } = ctx.user;
    return supa()
      .from("t_pray")
      .select(
        `
        *,
        t_users (
          group_seq
        )
      `,
      )
      .filter("t_users.group_seq", "eq", group_seq)
      .match({ group_seq });
  }),
  create: publicProcedure
    .input(TPrayCreateSchema)
    .mutation(async ({ input, ctx }) => {
      const { user_seq } = ctx.user;
      return supa()
        .from("t_pray")
        .insert({ ...input, user_seq });
    }),
  update: publicProcedure
    .input(TPrayUpdateSchema)
    .mutation(async ({ input }) => {
      const { pray_seq, ...rest } = input;
      return supa().from("t_pray").update(rest).eq("pray_seq", pray_seq);
    }),
  delete: publicProcedure
    .input(praySchema.shape.pray_seq)
    .mutation(async ({ input: pray_seq }) => {
      return supa().from("t_pray").delete().match({ pray_seq });
    }),
});
