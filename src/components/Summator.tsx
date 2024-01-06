"use client";

import { useConfiguratorContext } from "@/lib/hooks/useConfiguratorContext";
import React, { useEffect } from "react";

function Summator() {
  const { values } = useConfiguratorContext();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Summator;
