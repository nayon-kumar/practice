import React from "react";
import Link from "./Link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const data = [
  {
    name: "User",
    path: "/user",
    id: 101,
  },
  {
    name: "Product",
    path: "/product",
    id: 567,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 202,
  },
  {
    name: "Order",
    path: "/order",
    id: 8901,
  },
  {
    name: "Course",
    path: "/course",
    id: 45,
  },
];

const Navbar = () => {
  const links = data.map((nav) => <Link nav={nav} key={nav.id}></Link>);
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mx-10 mt-5">
      <div onClick={() => setOpen(!open)} className="flex items-center gap-4">
        {open ? <X className="sm:hidden" /> : <Menu className="sm:hidden" />}

        <ul
          className={`absolute sm:hidden duration-500 ${open ? "top-18" : "-top-60"}`}
        >
          {links}
        </ul>
        <h2 className="cursor-pointer font-bold text-2xl">Logo</h2>
      </div>
      <div>
        <ul className="hidden sm:flex gap-4">{links}</ul>
      </div>
      <div>
        <button className="btn btn-primary">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
