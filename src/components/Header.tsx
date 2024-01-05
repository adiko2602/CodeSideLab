import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import NavigationDrawer from "./NavigationDrawer";

function Header() {
  return (
    <div className="flex flex-row justify-between p-4 py-8 border-b">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
