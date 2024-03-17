"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const HomeBtn = () => {
  const path = usePathname();

  return path !== "/" ? (
    <Link href={"/"} className="home-link">
      BACK
    </Link>
  ) : (
    <div></div>
  );
};
