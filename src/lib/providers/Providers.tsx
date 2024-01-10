"use client";

import React from "react";
import { ConfiguratorContextProvider } from "../context/configuratorContext";
import { SessionProvider } from "next-auth/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ConfiguratorContextProvider>{children}</ConfiguratorContextProvider>
    </SessionProvider>
  );
}

export default Providers;
