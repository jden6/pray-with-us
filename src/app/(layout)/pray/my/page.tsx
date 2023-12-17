"use client";

import { useRouter } from "next/navigation";
import Page from "@/layout/Page";
import { api } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import PrayCard from "@/app/(layout)/pray/_components/prayCard";
import { cn } from "@/lib/utils";

const MyPage = () => {
  const { push } = useRouter();
  const { data, isLoading } = api.pray.getMyPrayList.useQuery();
  return (
    <Page
      title="내 기도 보기"
      actions={[
        <Button key="write" size="sm" onClick={() => push("/pray/edit/new")}>
          새 기도 작성
        </Button>,
      ]}
    >
      <div
        className={cn(
          "grid",
          "md:grid-cols-3",
          "xl:grid-cols-4",
          "grid-cols-1",
          "gap-3",
        )}
      >
        {data &&
          data.map((pray) => {
            return <PrayCard key={pray.pray_seq} {...pray} />;
          })}
      </div>
    </Page>
  );
};

export default MyPage;
