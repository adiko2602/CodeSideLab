import React from "react";
import { Button } from "./ui/button";

function LinkButton({ children }: { children: React.ReactNode | string }) {
  return (
    <Button className="bg-green-700 hover:bg-green-600 rounded-none">
      {children}
    </Button>
  );
}

export default LinkButton;
