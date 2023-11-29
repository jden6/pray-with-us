import {publicProcedure, router} from '@/server/trpc';
import {supa} from '@/lib/supabase/client';
import {getOneUserSchema, userSchema} from '@/schemas/user.schema';

export const userRouter = router({
  get: publicProcedure.query(async () => {
    return supa().from('t_users').select();
  }),
  getOne: publicProcedure.input(getOneUserSchema).query(async ({input}) => {
    return supa().from('t_users').select().eq('user_seq', input.user_seq);
  }),
  checkUserByEmail: publicProcedure.input(userSchema.pick('email')).query(async ({input}) => {
    return supa().from('t_users').select().eq('email', input);
  }),
  create: publicProcedure.input(userSchema).mutation(async ({input}) => {
    return supa().from('t_users').insert(input);
  }),
});