import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "./Navigation";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

function NavigationDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nawigacja</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-4 font-normal text-black text-lg pt-8">
              {navLinks.map((navLink) => (
                <Link key={navLink.href} href={navLink.href}>
                  {navLink.label}
                </Link>
              ))}
              <SignOutButton />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavigationDrawer;
