"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import { TSignInSchema, signInSchema } from "@/lib/forms/signInSchema";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RotateCw } from "lucide-react";

function SignInForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = async () => {
    setError("");
    setStatus("loading");
    const values: TSignInSchema = form.getValues();
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    console.log(res);

    if (!res?.ok) {
      if (res?.error) {
        setError(res.error);
        setStatus("error");
        return;
      }
      return;
    }
    router.push("/admin");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="rounded-lg p-4 border-2 border-red-600 text-red-600 bg-red-200 font-semibold text-sm">
            {error}
          </div>
        )}
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
            disabled={status === "loading"}
          >
            <div className="flex items-center gap-1">
              {status === "loading" && (
                <RotateCw className="h-4 w-4 animate-spin" />
              )}
              Zaloguj
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignInForm;
