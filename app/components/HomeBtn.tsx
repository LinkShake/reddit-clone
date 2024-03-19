"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HomeBtn = () => {
  const path = usePathname();

  return path !== "/" ? (
    <Link href={"/"} className="home-link">
      <IconArrowLeft />
    </Link>
  ) : (
    <div></div>
  );
};
