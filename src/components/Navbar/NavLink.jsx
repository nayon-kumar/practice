"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
  const pathName = usePathname();
  return (
    <div className="sm:flex">
      <li>
        <Link
          className={`${pathName === "/" ? "text-red-500" : ""}`}
          href={`/`}
        >
          Home
        </Link>
      </li>
    </div>
  );
};

export default NavLink;
