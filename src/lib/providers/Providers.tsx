"use client";

import React from "react";
import { ConfiguratorContextProvider } from "../context/configuratorContext";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "../query/queryClient";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ConfiguratorContextProvider>
          {children}
          <Toaster />
        </ConfiguratorContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default Providers;
