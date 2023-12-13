"use client";

import { ReactNode, useState } from "react";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "@/app/_trpc/client";

const Provider = ({ children }: { children: ReactNode }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: `${apiURL}/api/trpc`,
        }),
      ],
    }),
  );
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  );
};

export default Provider;
