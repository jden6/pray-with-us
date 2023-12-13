import { router } from "@/server/trpc";
import { userRouter } from "@/server/routers/user.router";
import { prayRouter } from "@/server/routers/pray.router";
import { groupRouter } from "@/server/routers/group.router";

export const appRouter = router({
  user: userRouter,
  pray: prayRouter,
  group: groupRouter,
});

export type AppRouter = typeof appRouter;
