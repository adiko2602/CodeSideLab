import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-row text-xl items-center gap-2">
        <Image
          src="/image/logocodesidelab.svg"
          alt="Logo"
          width={70}
          height={70}
        />
        <div className="flex font-bold">
          <div className="uppercase">
            <span className="text-green-600">C</span>ode
          </div>
          <div className="italic uppercase">
            <span className="text-green-600">S</span>ide
          </div>
          <div className="uppercase">
            <span className="text-green-600">L</span>ab
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
