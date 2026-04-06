import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "Diamond!";
  return (
    <div className="border-2 m-5">
      <p>Family tree</p>
      {/* <p>Asset Contex</p>
      <AssetContext value={asset}>
        <Grandpa />
      </AssetContext> */}
      <p>Money Contex</p>
      <p>Total money: {money}</p>
      <MoneyContext value={[money, setMoney]}>
        <Grandpa />
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
