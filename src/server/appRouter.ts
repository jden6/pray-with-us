import {router} from '@/server/trpc';
import {userRouter} from '@/server/routers/userRouter';
import {prayRouter} from '@/server/routers/prayRouter';

export const appRouter = router({
  user: userRouter,
  pray: prayRouter
});

export type AppRouter = typeof appRouter;