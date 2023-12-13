"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import Page from "@/layout/Page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePrayData } from "@/app/(layout)/pray/edit/[id]/data";

const PrayPage = ({ params: { id: prayId } }: { params: { id: string } }) => {
  const { push } = useRouter();
  const [editDate, setEditDate] = useState<Date | string>(new Date());
  const title = prayId === "new" ? "기도 제목 작성" : "기도";
  const submitText = prayId === "new" ? "등록" : "수정";

  const { isNew, data, actions } = usePrayData(prayId);
  const { handleSubmit, control } = useForm();

  const { fields, prepend, append, remove } = useFieldArray({
    name: "pray",
    control,
    rules: {
      maxLength: 5,
    },
  });

  const handleAppend = () => {
    if (fields.length >= 5) {
      toast("기도 제목은 최대 5개까지만 추가할 수 있습니다.");
      return;
    }
    append(
      { value: "" },
      {
        shouldFocus: true,
      },
    );
  };

  const onSubmit = async ({ pray }: any) => {
    if (!pray.length) {
      toast.error("기도 제목을 입력해주세요.");
      return;
    }

    const title = pray[0].value;
    const content = JSON.stringify(pray);
    await actions.save({ title, content });
  };

  useEffect(() => {
    if (!isNew && data?.pray) {
      const { content, updated_at } = data.pray;
      setEditDate(updated_at || new Date());
      const parsed = JSON.parse(content || "[]");
      parsed.map(({ value }: { value: string }) => {
        append(
          { value },
          {
            shouldFocus: true,
          },
        );
      });
    }
  }, [data.pray]);

  return (
    <Page
      key="what"
      title={title}
      actions={[
        <Button key="cancel" onClick={() => push("/pray")}>
          리스트
        </Button>,
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <div className={cn("flex", "justify-between")}>
              <div>
                <CardTitle>기도 {isNew ? "작성" : "수정"}</CardTitle>
                <CardDescription>
                  기도 작성일 : {dayjs(editDate).format("YYYY-MM-DD")}
                </CardDescription>
              </div>
              <Button type="submit">{submitText}</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className={cn("flex", "flex-col", "space-y-1.5")}>
              <div className={cn("flex", "justify-between", "items-center")}>
                <Label htmlFor="name">기도 제목{"'s"}</Label>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  className={cn("ml-2")}
                  onClick={handleAppend}
                >
                  +
                </Button>
              </div>
              <ul className={cn("space-y-1")}>
                {!fields.length ? (
                  <li
                    className={cn(
                      "flex",
                      "justify-center",
                      "items-center",
                      "cursor-pointer",
                      "rounded-lg",
                      "border-2",
                      "border-gray-300",
                      "h-14",
                      "hover:bg-gray-200",
                    )}
                  >
                    기도제목을 추가해주세요
                  </li>
                ) : (
                  fields.map((item, index) => (
                    <li
                      key={item.id}
                      className={cn("flex", "space-x-2", "items-center")}
                    >
                      <Controller
                        name={`pray.${index}.value`}
                        key={item.id}
                        control={control}
                        render={({ field }) => (
                          <Textarea placeholder="기도 제목" {...field} />
                        )}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        -
                      </Button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      </form>
    </Page>
  );
};

export default PrayPage;
