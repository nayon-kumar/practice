import React from "react";

const Link = ({ nav }) => {
  return (
    <li>
      <a href={nav.path}>{nav.name}</a>
    </li>
  );
};

export default Link;
