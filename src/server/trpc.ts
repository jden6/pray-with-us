import {initTRPC} from '@trpc/server';
import {Context} from '@/server/context';
import authMiddleware from '@/server/middleware/auth.middleware';

const t = initTRPC.context<Context>().create();
export const router = t.router;
export const publicProcedure = t.procedure.use(authMiddleware)