"use client";

import React, { createContext, useState, ReactNode } from "react";
import { TConfiguratorSchema } from "../forms/configuratorSchema";

export const configuratorContextDefaultValues: TConfiguratorSchema = {
  ddos: false,
  hosting: false,
  moderation: false,
  positioning: false,
  slider: false,
  subpages: 0,
  type: "shop",
};

export interface ConfiguratorContextProps {
  values: TConfiguratorSchema | undefined;
  handleSetValues: (values: TConfiguratorSchema) => void;
}

export interface ConfiguratorProviderProps {
  children: ReactNode;
}

export const ConfiguratorContext = createContext<
  ConfiguratorContextProps | undefined
>(undefined);

export function ConfiguratorContextProvider({
  children,
}: ConfiguratorProviderProps) {
  const [values, setValues] = useState<TConfiguratorSchema>(
    configuratorContextDefaultValues
  );

  const handleSetValues = (values: TConfiguratorSchema) => {
    setValues(values);
  };

  const contextValues: ConfiguratorContextProps = {
    values,
    handleSetValues,
  };

  return (
    <ConfiguratorContext.Provider value={contextValues}>
      {children}
    </ConfiguratorContext.Provider>
  );
}
