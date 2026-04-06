import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div className="boder-2 m-5">
      <p>Uncle</p>
      <div className="flex gap-5 boder-2 m-5">
        <Cousin name={"Rafsa"} />
        <Cousin name={"Jhapsa"} />
      </div>
    </div>
  );
};

export default Uncle;
