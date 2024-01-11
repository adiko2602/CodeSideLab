"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ActionButton from "@/components/ActionButton";
import { Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Requests from "@/lib/api/Request";
import { Button } from "@/components/ui/button";

function DeleteUserDialog({
  userId,
  email,
}: {
  userId: number;
  email: string;
}) {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: async () =>
      await Requests.Remove<null>(`/api/admin/user/${userId}`),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["adminUserQuery"] });
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-none">
          <Trash className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Usuń użytkownika</DialogTitle>
          <DialogDescription>
            Czy napewno chcesz usunąć użytkownika{" "}
            <span className="font-semibold">{`"${email}"`}</span>? Nie będziesz
            mógł cofnąć tej operacji.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-row gap-2 justify-between">
            <DialogClose asChild>
              <ActionButton type="button" variant="outline">
                Anuluj
              </ActionButton>
            </DialogClose>
            <ActionButton
              type="button"
              onClick={mutate}
              disabled={status === "pending"}
            >
              Usuń
            </ActionButton>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteUserDialog;
