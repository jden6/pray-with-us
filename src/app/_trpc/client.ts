import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/appRouter";

export const api = createTRPCReact<AppRouter>({});
