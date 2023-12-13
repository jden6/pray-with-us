import dayjs from "dayjs";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePraySheet } from "@/hooks/use.pray.sheet";
import { cn } from "@/lib/utils";
import { api } from "@/app/_trpc/client";

const PraySheet = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const { id, isOpen, onClose } = usePraySheet();
  const { data, isLoading, isFetching } = api.pray.getOne.useQuery(id || 0, {
    enabled: !!id,
  });
  const isOwner = session?.user && session.user.user_seq === data?.user_seq;

  const handleEdit = () => {
    push(`/pray/edit/${id}`);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className={cn("sm:w-full")}>
        {!data && (isLoading || isFetching) && "loading..."}
        {data && (
          <>
            <SheetTitle className={cn("flex", "space-x-10", "items-center")}>
              <span>{dayjs(data?.created_at).format("YYYY-MM-DD")}</span>
              <div
                className={cn("text-sm", "cursor-pointer")}
                onClick={handleEdit}
              >
                <Pencil size={16} />
              </div>
            </SheetTitle>
            <SheetDescription className={cn("mt-3")}>
              {data.title}
            </SheetDescription>
            <ul className={cn("my-4", "space-y-2", "decoration-1")}>
              {JSON.parse(data?.content).map(
                ({ value }: { value: string }, index: number) => {
                  return (
                    <li key={index}>
                      <span>❣️</span>
                      {value}
                    </li>
                  );
                },
              )}
            </ul>
            {/*<div>*/}
            {/*  댓글 이나 좋아요 표시가 들어가면 좋을듯*/}
            {/*</div>*/}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default PraySheet;
