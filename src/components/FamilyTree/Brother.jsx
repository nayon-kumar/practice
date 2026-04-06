import React, { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <p>Brother</p>
      <button className="btn" onClick={() => setMoney(money + 100)}>
        Add 100 Tk
      </button>
    </div>
  );
};

export default Brother;
