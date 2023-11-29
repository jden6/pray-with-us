import {z} from 'zod';
import {publicProcedure, router} from '@/server/trpc';
import {supa} from '@/lib/supabase/client';
import {
  praySchema,
  TPrayCreateSchema,
  TPraySchema, TPrayUpdateSchema,
} from '@/schemas/pray.schema';

export const prayRouter = router({
  get: publicProcedure.query(async () => {
    return supa().from('t_pray').select();
  }),
  getAllRecentPray: publicProcedure.query(async () => {
    return supa().from('t_pray').select().order('created_at', {ascending: false}).limit(10);
  }),
  getUserResentPray: publicProcedure.input(z.string()).query(async ({ctx, input}) => {
    const {user_seq, group_seq} = ctx.user;
    console.log(input)
    const result = supa().from('t_pray')
    if(input === 'me'){
      return result.select().match({user_seq})
      .order('created_at', {ascending: false}).limit(5);
    }
    if(input === 'cell'){
      return result.select(`
        *,
        t_users (
          group_seq,
          name
        )
      `).filter('t_users.group_seq', 'eq', group_seq)
        .order('created_at', {ascending: false}).limit(5);
    }
  }),
  getOne: publicProcedure.input(praySchema.shape.pray_seq).
    query(async ({input: pray_seq, ctx}) => {
      return supa()
        .from('t_pray')
        .select()
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
    return supa().from('t_pray').update(input);
  }),
  delete: publicProcedure.input(praySchema.shape.pray_seq).
    mutation(async ({input: pray_seq}) => {
      return supa().
        from('t_pray').
        delete().
        match({pray_seq});
    }),
});