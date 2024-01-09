"use client";

import { TSummatorSchema, summatorSchema } from "@/lib/forms/summatorSchema";
import { useConfiguratorContext } from "@/lib/hooks/useConfiguratorContext";
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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Summator() {
  const { values: configuratorValues } = useConfiguratorContext();

  const form = useForm<TSummatorSchema>({
    resolver: zodResolver(summatorSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    const values: TSummatorSchema = form.getValues();
    alert(
      `${JSON.stringify(configuratorValues, null, 2)}
      ${JSON.stringify(values, null, 2)}`
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <pre>
        <code>{JSON.stringify(configuratorValues, null, 2)}</code>
      </pre>
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
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Numer telefonu</FormLabel>
                    <FormControl>
                      <Input placeholder="Wpisz numer telefonu" {...field} />
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
            >
              Wyślij zapytanie
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Summator;
