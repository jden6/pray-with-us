"use client";

import { api } from "@/app/_trpc/client";

export const usePrayListData = () => {
  const { data, isLoading } = api.pray.getGroupPrayList.useQuery();
  return {
    isLoading,
    data,
    actions: {},
  };
};
