import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <div className="p-4 py-8 border-b flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;
