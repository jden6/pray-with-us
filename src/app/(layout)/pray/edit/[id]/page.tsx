"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Page from "@/layout/Page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { usePrayData } from "@/app/(layout)/pray/edit/[id]/data";
import { Textarea } from "@/components/ui/textarea";

const PrayPage = ({ params: { id: prayId } }: { params: { id: string } }) => {
  const { push } = useRouter();

  const { data, actions } = usePrayData(prayId);
  const title = prayId === "new" ? "기도 제목 작성하기" : "기도 제목 수정하기";
  const submitText = prayId === "new" ? "등록" : "수정";

  const form = useForm();
  const { handleSubmit, register, setValue } = form;

  const onSubmit = async (data: any) => {
    const { content } = data;
    if (!content.length) {
      return toast("기도 내용을 입력해주세요.");
    }
    await actions.save({ content: content.toString().trim() });
  };

  useEffect(() => {
    if (data && data.pray?.content) {
      setValue("content", data.pray?.content);
    }
  }, [data.pray?.content]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Page
        key="what"
        title={title}
        actions={[
          <Button key="save" className={cn("end-0")} type="submit">
            {submitText}
          </Button>,
          <Button key="cancel" type="button" onClick={() => push("/pray")}>
            리스트
          </Button>,
        ]}
      >
        <Card>
          <CardHeader>
            <div className={cn("flex", "justify-between", "items-center")}>
              <div>
                <CardTitle>기도 {prayId === "new" ? "작성" : "수정"}</CardTitle>
                <CardDescription>
                  기도 작성일 : {dayjs(data.pray?.created_at).format("YYYY-MM-DD")}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea {...register("content")} rows={10} />
          </CardContent>
        </Card>
      </Page>
    </form>
  );
};

export default PrayPage;
