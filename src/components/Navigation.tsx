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
    href: "/pracing",
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
        <Link key={navLink.href} href={navLink.href}>
          {navLink.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
