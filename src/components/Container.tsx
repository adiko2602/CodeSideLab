import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="min-h-svh">{children}</div>;
}

export default Container;
