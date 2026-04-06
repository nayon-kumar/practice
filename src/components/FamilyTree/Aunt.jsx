import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div className="boder-2 m-5">
      <p>Aunt</p>
      <div className="flex gap-5 m-5">
        <Cousin name={"Tom Tom"} />
        <Cousin name={"Jo Joo"} />
      </div>
    </div>
  );
};

export default Aunt;
