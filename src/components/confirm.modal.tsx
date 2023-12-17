import toast from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useConfirmModal } from "@/hooks/use.modal";
import { usePrayListData } from "@/app/(layout)/pray/data";

const ModalDeletePray = () => {
  const { actions } = usePrayListData();
  const { isOpen, onClose, id } = useConfirmModal((state) => state);
  const handleDelete = async () => {
    try {
      await actions.handleDeletePray(id || 0);
      toast.success("삭제되었습니다");
      onClose();
    } catch (e) {
      toast.error("삭제 실패, 다시 시도해주세요");
    }
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>정말 삭제하시겠습니까?</DialogHeader>
        <DialogFooter>
          <DialogClose className={cn("space-x-2")}>
            <Button type="button" variant="secondary" onClick={handleDelete}>
              확인
            </Button>
            <Button type="button" onClick={onClose}>
              취소
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeletePray;
