import dayjs from "dayjs";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TPrayView } from "@/schemas/pray.schema";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useConfirmModal, usePrayModal } from "@/hooks/use.modal";

const PrayCard = ({
  pray_seq,
  content,
  created_at,
  t_users,
  user_seq,
}: TPrayView) => {
  const session = useSession();
  const { push } = useRouter();
  const { onOpen } = useConfirmModal((state) => state);
  const { onOpen: openModal } = usePrayModal((state) => state);
  return (
    <Card className={cn("group")}>
      <CardHeader>
        <div className={cn("flex", "justify-between")}>
          <CardTitle
            className={cn(
              "flex",
              "items-center",
              "space-x-2",
              "cursor-pointer",
            )}
            onClick={() => openModal(pray_seq)}
          >
            <span>{t_users && t_users.name}의 기도</span>
          </CardTitle>
          {session.data?.user.user_seq === user_seq && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn("h-8 w-8 p-0")} size="sm">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => push(`/pray/edit/${pray_seq}`)}
                >
                  수정
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onOpen(pray_seq, "정말 삭제하시겠습니까?")}
                >
                  삭제
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => toast("준비중입니다")}>
                  기도 요청하기
                </DropdownMenuItem>
                {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <CardDescription>{`${dayjs(new Date(created_at || "")).format(
          "YYYY-MM-DD HH:mm",
        )}`}</CardDescription>
      </CardHeader>
      <CardContent>
        {/*<ContentParser contents={content}/>*/}
        <div className={cn("whitespace-pre-wrap")}>{content}</div>
      </CardContent>
      {/*<CardFooter className={cn('flex', 'justify-between')}>*/}
      {/*<div className={cn('flex', 'space-x-3')}>*/}
      {/*  {tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}*/}
      {/*</div>*/}
      {/*<div className={cn('flex', 'space-x-3')}>*/}
      {/*  /!*<div>{author}</div>*!/*/}
      {/*</div>*/}
      {/*</CardFooter>*/}
    </Card>
  );
};

export default PrayCard;
