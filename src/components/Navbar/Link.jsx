import React from "react";

const Link = ({ nav }) => {
  return (
    <li className="hover:bg-[#101828] px-5 py-2 rounded-sm hover:text-white">
      <a href={nav.path}>{nav.name}</a>
    </li>
  );
};

export default Link;
