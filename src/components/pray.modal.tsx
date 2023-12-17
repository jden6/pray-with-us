import dayjs from 'dayjs';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent, DialogDescription,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { usePrayModal } from "@/hooks/use.modal";
import { api } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PrayModal = () => {
  const { push } = useRouter();
  const session = useSession();
  const id = usePrayModal((state) => state.id);
  const isOpen = usePrayModal((state) => state.isOpen);
  const onClose = usePrayModal((state) => state.onClose);

  const { data } = api.pray.getOne.useQuery(id || 0, {
    enabled: id !== undefined,
  });
  // @ts-ignore
  const isMine = data?.user_seq === session?.data?.user?.user_seq!;

  const handleUpdate = () => {
    push(`/pray/edit/${id}`);
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          {/*// @ts-ignore*/}
          {(data && data?.t_users?.name) || ""}의 기도
          <DialogDescription>
            {data && dayjs(data?.created_at).format("YYYY-MM-DD HH:mm")}
          </DialogDescription>
        </DialogHeader>
        <div>
          {data && data?.content}
        </div>
        {/*<ContentParser contents={(data && data?.content) || ""} />*/}
        <DialogFooter>
          <DialogClose className={cn("space-x-2")}>
            {isMine && (
              <Button type="button" variant="secondary" onClick={handleUpdate}>
                수정
              </Button>
            )}
            <Button type="button" onClick={onClose}>
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrayModal;
