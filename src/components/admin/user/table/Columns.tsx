"use client";

import ActionButton from "@/components/ActionButton";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Trash } from "lucide-react";
import DeleteUserDialog from "../DeleteUserDialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: number;
  email: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex flex-row gap-2 items-center justify-end">
          <DeleteUserDialog userId={user.id} email={user.email} />
          <Button variant="outline" size="icon" className="rounded-none">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
