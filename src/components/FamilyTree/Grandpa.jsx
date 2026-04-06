import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div>
      <p>Grandpa</p>
      <div className="border-2 m-5 flex">
        <Dad />
        <Uncle />
        <Aunt />
      </div>
    </div>
  );
};

export default Grandpa;
