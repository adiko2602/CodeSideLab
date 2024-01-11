"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateUserForm from "./CreateUserForm";
import ActionButton from "@/components/ActionButton";

function CreateUserDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ActionButton type="button">Nowy użytkownik</ActionButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nowy użytkownik</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4">
              <div>
                Utwórz nowego użytkownika.{" "}
                <span className="font-semibold">
                  Pamiętaj aby później wysłać dane logowania
                </span>
                .
              </div>
              <CreateUserForm setOpen={setOpen} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateUserDialog;
