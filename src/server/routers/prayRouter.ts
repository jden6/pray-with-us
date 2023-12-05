import {z} from 'zod';
import {publicProcedure, router} from '@/server/trpc';
import {supa} from '@/lib/supabase/client';
import {
  praySchema,
  TPrayCreateSchema,
  TPrayUpdateSchema,
} from '@/schemas/pray.schema';

export const prayRouter = router({
  get: publicProcedure.query(async () => {
    return supa().from('t_pray').select();
  }),
  getAllRecentPray: publicProcedure.query(async () => {
    return supa().from('t_pray').select().order('created_at', {ascending: false}).limit(10);
  }),
  getGroupPrayList: publicProcedure.query(async ({ctx}) => {
    return supa().from('t_pray').select(
      `
        *,
        t_users (
          name,
          group_seq
        )
      `
    ).match({'t_users.group_seq': ctx.user.group_seq});
  }),
  getUserResentPray: publicProcedure.input(z.string()).query(async ({ctx, input}) => {
    const {user_seq, group_seq} = ctx.user;
    const result = supa().from('t_pray').select(`
        *,
        t_users (
          group_seq,
          name
        )
      `)
    if(input === 'me'){
      return result.match({user_seq})
      .order('created_at', {ascending: false}).limit(5);
    }
    if(input === 'cell'){
      return result.filter('t_users.group_seq', 'eq', group_seq)
        .order('created_at', {ascending: false}).limit(5);
    }
  }),
  getOne: publicProcedure.input(praySchema.shape.pray_seq).
    query(async ({input: pray_seq}) => {
      return supa()
        .from('t_pray')
        .select(`
          content,
          pray_seq,
          created_at,
          updated_at,
          user_seq,
          t_users (
            name
          )
        `)
        .match({pray_seq}).single();
    }),
  getGroupPray: publicProcedure.query(async ({ctx}) => {
    const {group_seq} = ctx.user;
    return supa()
      .from('t_pray')
      .select(`
        *,
        t_users (
          group_seq
        )
      `)
      .filter('t_users.group_seq', 'eq', group_seq)
      .match({group_seq});
  }),
  create: publicProcedure.input(TPrayCreateSchema).mutation(async ({input, ctx}) => {
    const {user_seq} = ctx.user;
    return supa().from('t_pray').insert({...input, user_seq});
  }),
  update: publicProcedure.input(TPrayUpdateSchema).mutation(async ({input}) => {
    const {pray_seq, ...rest} = input;
    return supa().from('t_pray').update(rest).eq('pray_seq', pray_seq);
  }),
  delete: publicProcedure.input(praySchema.shape.pray_seq).
    mutation(async ({input: pray_seq}) => {
      return supa().
        from('t_pray').
        delete().
        match({pray_seq});
    }),
});