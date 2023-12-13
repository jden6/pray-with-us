"use client";

import { useRouter } from "next/navigation";
import Page from "@/layout/Page";
import { cn } from "@/lib/utils";
import NoticeCard from "@/app/(layout)/pray/_components/noticeCard";
import { Button } from "@/components/ui/button";
import PrayList from "@/components/pray/list";
import { api } from "@/app/_trpc/client";
import NoDataCard from "@/app/(layout)/pray/_components/NoDataCard";

const PrayPage = () => {
  const { push } = useRouter();
  const { data, isLoading } = api.pray.getGroupPrayList.useQuery();
  return (
    <Page
      title="With Us Pray List"
      actions={
        <>
          <Button key="my" onClick={() => push("/pray/my")} size="sm">
            내 기도
          </Button>
          <Button key="write" onClick={() => push("/pray/edit/new")} size="sm">
            새 기도 작성
          </Button>
        </>
      }
    >
      <div className={cn("grid", "md:grid-cols-4", "gap-3")}>
        <div className={cn("col-span-3")}>
          {isLoading ? "Loading..." : <PrayList list={data || []} />}
          {/*// TODO: loading progress 필요*/}
          {data?.length === 0 && <NoDataCard />}
        </div>
        <div className={cn("hidden", "sm:block", "space-y-2")}>
          {/*<PraySearch/>*/}
          <NoticeCard />
        </div>
      </div>
    </Page>
  );
};

export default PrayPage;
