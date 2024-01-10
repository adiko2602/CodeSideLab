"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { RotateCw } from "lucide-react";

function SignOutButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSignOut = async () => {
    setStatus("loading");
    await signOut({ redirect: false });
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
          {status === "loading" && (
            <RotateCw className="h-4 w-4 animate-spin" />
          )}
          Wyloguj
        </Button>
      )}
    </>
  );
}

export default SignOutButton;
