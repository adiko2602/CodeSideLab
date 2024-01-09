"use client";

import useBrakepoint from "@/lib/hooks/useBrakepoint";
import Link from "next/link";
import React from "react";
import NavigationDrawer from "./NavigationDrawer";

export type TNavLink = {
  href: string;
  label: string;
};

export const navLinks: TNavLink[] = [
  {
    href: "/",
    label: "Strona główna",
  },
  {
    href: "/configure",
    label: "Wycena",
  },
  {
    href: "/contact",
    label: "Kontakt",
  },
];

function Navigation() {
  const { brakepoint } = useBrakepoint();
  if (brakepoint === "none" || brakepoint === "xs" || brakepoint === "sm")
    return <NavigationDrawer />;
  return (
    <nav className="flex flex-row gap-4">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.href}
          href={navLink.href}
          className="  p-2 hover:border-b-2 hover:border-green-600 border-b-2 border-white border-opacity-0 transition"
        >
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
