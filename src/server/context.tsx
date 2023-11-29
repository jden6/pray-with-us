import {getServerSession} from 'next-auth';
import {inferAsyncReturnType} from '@trpc/server';

export const createContext = async (opts: any) => {
  const session = await getServerSession();
  return {
    ...opts,
    session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>