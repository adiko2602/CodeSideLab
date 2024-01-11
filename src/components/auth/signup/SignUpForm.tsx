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
import { TSignUpSchema, signUpSchema } from "@/lib/forms/signUpSchema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { RotateCw } from "lucide-react";
import Requests from "@/lib/api/Request";
import { TUser } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";

function SignUpForm() {
  const router = useRouter();

  const { mutate, status } = useMutation({
    mutationFn: async (values: TSignUpSchema) =>
      await Requests.Post<TSignUpSchema, TUser>("/api/auth", values),
    onSuccess: () => {
      router.push("/auth/signin");
    },
  });

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    const values: TSignUpSchema = form.getValues();
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
              name="passwords.password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Wpisz hasło"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwords.confirmedPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Powtórz hasło</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Wpisz hasło"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            className="bg-green-700 hover:bg-green-600 rounded-none"
            type="submit"
            disabled={status === "pending"}
          >
            <div className="flex items-center gap-1">
              {status === "pending" && (
                <RotateCw className="h-4 w-4 animate-spin" />
              )}
              Zarejestruj
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignUpForm;
