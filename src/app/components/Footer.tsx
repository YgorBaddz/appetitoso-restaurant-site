import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-orange-600 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        APPETITOSO
      </Link>
      <p className="text-sm sm:text-base">© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
