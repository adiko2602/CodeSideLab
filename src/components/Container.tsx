import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="min-h-svh w-screen">{children}</div>;
}

export default Container;
