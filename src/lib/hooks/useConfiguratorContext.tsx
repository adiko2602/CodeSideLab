"use client";

import { useContext } from "react";
import {
  ConfiguratorContext,
  ConfiguratorContextProps,
} from "../context/configuratorContext";

export function useConfiguratorContext(): ConfiguratorContextProps {
  const context = useContext(ConfiguratorContext);
  if (!context) {
    throw new Error(
      "useConfiguratorContext must be used within a ConfiguratorContextProvider"
    );
  }
  return context;
}
