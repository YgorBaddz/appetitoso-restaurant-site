import Link from "next/link";
import React from "react";

const Notification = () => {
  return (
    <Link
      href="/menu"
      className="h-12 bg-orange-600 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer"
    >
      Free delivery for all orders over $50. Order your food now!
    </Link>
  );
};

export default Notification;
