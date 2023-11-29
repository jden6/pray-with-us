import {MiddlewareFunction, ProcedureParams, TRPCError} from '@trpc/server';
import {Context} from '@/server/context';
import {supa} from '@/lib/supabase/client';
import {TUser} from '@/schemas/user.schema';

type AuthMiddleware = MiddlewareFunction<
  { _ctx_out: Context } & ProcedureParams,
  { _ctx_out: Context & { user: { user_seq: number } } } & ProcedureParams
>

const authMiddleware: AuthMiddleware = (
  async ({ctx, next}) => {
    const sessionUser = ctx.session.user;
    if (!sessionUser) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: '사용자를 찾을 수 없습니다..',
      });
    }
    const findUser = await supa().
      from('t_auth_info').
      select(`
        account,
        t_users(
          user_seq,
          group_seq
        )
      `).filter('account', 'eq', sessionUser.email);
    if (!findUser.data?.length) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: '사용자를 찾을 수 없습니다..',
      });
    }

    const user = {
      account: findUser.data[0].account,
      ...findUser.data[0].t_users,
    };
    return next({ctx: {...ctx, user}});
  });

export default authMiddleware;