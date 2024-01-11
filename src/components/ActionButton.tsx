import React from "react";
import { Button } from "./ui/button";
import { RotateCw } from "lucide-react";

function ActionButton({
  children,
  onClick,
  type,
  variant,
  disabled,
  loading,
}: {
  children: React.ReactNode | string;
  onClick?: () => void;
  type: "button" | "reset" | "submit";
  variant?: "default" | "destructive" | "outline";
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <Button
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={onClick}
      className={
        variant === "default" || !variant
          ? "bg-green-700 hover:bg-green-600 rounded-none"
          : "rounded-none"
      }
    >
      <div className="flex items-center gap-1">
        {disabled && <RotateCw className="h-4 w-4 animate-spin" />}
        {children}
      </div>
    </Button>
  );
}

export default ActionButton;
