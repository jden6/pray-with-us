import dayjs from "dayjs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/table-core";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { TPrayView } from "@/schemas/pray.schema";
import { api } from "@/app/_trpc/client";
import { usePraySheet } from "@/hooks/use.pray.sheet";

export const columns: ColumnDef<TPrayView>[] = [
  {
    accessorKey: "created_at",
    header: () => <div>작성일</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return <div>{dayjs(date).format("YYYY-MM-DD")}</div>;
    },
  },
  {
    accessorKey: "title",
    header: "기도제목",
    cell: ({ row }) => {
      const onOpen = usePraySheet((state) => state.onOpen);
      return (
        <div onClick={() => onOpen(row.original.pray_seq)}>
          {row.getValue("title")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { push } = useRouter();
      const { pray_seq } = row.original;
      const { mutateAsync } = api.pray.delete.useMutation();
      const { refetch } = api.pray.getMyPrayList.useQuery();
      const handleDeletePray = async () => {
        try {
          await mutateAsync(pray_seq);
          toast.error("삭제되었습니다");
          refetch();
        } catch (e) {
          toast.error("삭제 실패, 다시 시도해주세요");
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0" size="sm">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => push(`/pray/edit/${pray_seq}`)}>
              수정
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDeletePray}>삭제</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast("준비중입니다")}>
              기도 요청하기
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
