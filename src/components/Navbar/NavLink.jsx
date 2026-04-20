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
      <li>
        <Link
          className={`${pathName === "/apps" ? "text-red-500" : ""}`}
          href={`/apps`}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/installed" ? "text-red-500" : ""}`}
          href={`/installed`}
        >
          Installed
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/foods" ? "text-red-500" : ""}`}
          href={`/foods`}
        >
          Foods
        </Link>
      </li>
    </div>
  );
};

export default NavLink;
