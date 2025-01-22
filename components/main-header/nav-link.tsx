"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";

export default function NavLink({
  href,
  children,
}: Readonly<{ href: string; children: ReactNode }>) {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={
          path.startsWith(href) || path === href ? classes.active : undefined
        }
      >
        {children}
      </Link>
    </li>
  );
}
