"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { RotateCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

function SignOutButton() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSignOut = async () => {
    setStatus("loading");
    await signOut({ redirect: false });
    queryClient.removeQueries();
    setStatus("idle");
    router.push("/auth/signin");
  };

  return (
    <>
      {session?.user && (
        <Button
          className="bg-green-700 hover:bg-green-600 rounded-none"
          onClick={handleSignOut}
          disabled={status === "loading"}
        >
          <div className="flex items-center gap-1">
            {status === "loading" && (
              <RotateCw className="h-4 w-4 animate-spin" />
            )}
            Wyloguj
          </div>
        </Button>
      )}
    </>
  );
}

export default SignOutButton;
