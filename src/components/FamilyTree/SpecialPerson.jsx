import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const SpecialPerson = () => {
  const asset = useContext(AssetContext);
  return (
    <div>
      <p>Special</p>
      <p>Asset: {asset}</p>
    </div>
  );
};

export default SpecialPerson;
