"use client";

import toast from "react-hot-toast";
import { api } from "@/app/_trpc/client";

export const usePrayListData = () => {
  const { data, isLoading, refetch } = api.pray.getGroupPrayList.useQuery();
  const { mutateAsync } = api.pray.delete.useMutation();
  const handleDeletePray = async (id: number) => {
    try {
      await mutateAsync(id);
      toast.error("삭제되었습니다");
      await refetch();
    } catch (e) {
      toast.error("삭제 실패, 다시 시도해주세요");
    }
  };
  return {
    isLoading,
    data,
    actions: {
      handleDeletePray
    },
  };
};
