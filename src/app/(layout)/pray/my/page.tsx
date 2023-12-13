"use client";

import { useRouter } from "next/navigation";
import Page from "@/layout/Page";
import { api } from "@/app/_trpc/client";
import DataTable from "@/app/(layout)/pray/my/data-table";
import { columns } from "@/app/(layout)/pray/my/columns";
import { Button } from "@/components/ui/button";

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
      <DataTable
        columns={columns}
        data={data || []}
        loading={isLoading}
      />
    </Page>
  );
};

export default MyPage;
