"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Requests from "@/lib/api/Request";
import { TUser } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  TAdminSignUpSchema,
  adminSignUpSchema,
} from "@/lib/forms/adminSignUpSchema";
import ActionButton from "@/components/ActionButton";

function CreateUserForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: async (values: TAdminSignUpSchema) =>
      await Requests.Post<TAdminSignUpSchema, TUser>("/api/admin/user", values),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["adminUserQuery"] });
      setOpen(false);
    },
  });

  const form = useForm<TAdminSignUpSchema>({
    resolver: zodResolver(adminSignUpSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    const values: TAdminSignUpSchema = form.getValues();
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-6 items-start rounded-md border p-4 shadow">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Adres email</FormLabel>
                  <FormControl>
                    <Input placeholder="Wpisz adres email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input placeholder="Wpisz hasło" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <ActionButton type="submit" disabled={status === "pending"}>
            Zarejestruj
          </ActionButton>
        </div>
      </form>
    </Form>
  );
}

export default CreateUserForm;
