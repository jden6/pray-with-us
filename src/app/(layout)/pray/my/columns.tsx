import { ColumnDef } from "@tanstack/table-core";
import dayjs from "dayjs";
import { TPrayView } from "@/schemas/pray.schema";

export const columns: ColumnDef<TPrayView>[] = [
  {
    accessorKey: "created_at",
    header: () => <div>작성일</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return <div>{dayjs(date).format()}</div>;
    },
  },
  {
    accessorKey: "title",
    header: "기도제목",
  },
];
