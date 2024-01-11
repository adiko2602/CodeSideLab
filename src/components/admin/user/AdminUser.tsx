"use client";

import PageContent from "@/components/PageContent";
import Requests from "@/lib/api/Request";
import { TUser } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { DataTable } from "./table/DataTable";
import { columns } from "./table/Columns";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateUserDialog from "./CreateUserDialog";

function AdminUser() {
  const { data } = useQuery({
    queryFn: async () => await Requests.Get<TUser[]>("/api/admin/user"),
    queryKey: ["adminUserQuery"],
  });

  return (
    <PageContent>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/admin">
            <Button variant="ghost" className="rounded-none" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="text-lg font-semibold">Admin Panel User</div>
        </div>
        <CreateUserDialog />
      </div>

      <DataTable columns={columns} data={data?.data.data ?? []} />
    </PageContent>
  );
}

export default AdminUser;
