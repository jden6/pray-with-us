import { useEffect } from "react";
import { Controller, useFieldArray, type UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const EditMultiForm = ({
  isNew,
  data,
  form,
}: {
  isNew: boolean;
  data?: any;
  form: UseFormReturn;
}) => {
  const { fields, prepend, append, remove } = useFieldArray({
    name: "pray",
    control: form.control,
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

  useEffect(() => {
    if (!isNew && data?.pray) {
      const { content, updated_at } = data.pray;
      // setEditDate(updated_at || new Date());
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
    <div className={cn("flex", "flex-col", "space-y-1.5")}>
      <Button type={"button"} className={cn("")} onClick={handleAppend}>
        기도 제목 추가
      </Button>
      <ul className={cn("space-y-1")}>
        {fields.map((item, index) => (
          <li key={item.id} className={cn("flex", "space-x-2", "items-center")}>
            <Controller
              name={`pray.${index}.value`}
              key={item.id}
              control={form.control}
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
        ))}
      </ul>
    </div>
  );
};
export default EditMultiForm;
