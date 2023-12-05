import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {
  Dialog, DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import {usePrayModal} from '@/hooks/use.pray.modal';
import {api} from '@/app/_trpc/client';
import ContentParser from '@/app/(layout)/pray/_components/contentParser';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

const PrayModal = () => {
  const {push} = useRouter();
  const session = useSession();
  const id = usePrayModal(state => state.id);
  const isOpen = usePrayModal(state => state.isOpen);
  const onClose = usePrayModal(state => state.onClose);

  const {data, isLoading} = api.pray.getOne.useQuery(id || 0, {
    enabled: id !== undefined,
  });
  // @ts-ignore
  const isMine = data?.data?.user_seq === session?.data?.user?.user_seq!;

  const handleUpdate = () => {
    push(`/pray/${id}`);
    onClose();
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        {/*// @ts-ignore*/}
        {data && data?.data?.t_users?.name || ''}
      </DialogHeader>
      <ContentParser contents={data && data?.data?.content || ""} />
      <DialogFooter>
        <DialogClose className={cn('space-x-2')}>
          {isMine && <Button type="button" variant="secondary" onClick={handleUpdate}>수정</Button>}
          <Button type="button" onClick={onClose}>닫기</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
};

export default PrayModal;