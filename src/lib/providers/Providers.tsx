"use client";

import React from "react";
import { ConfiguratorContextProvider } from "../context/configuratorContext";

function Providers({ children }: { children: React.ReactNode }) {
  return <ConfiguratorContextProvider>{children}</ConfiguratorContextProvider>;
}

export default Providers;
