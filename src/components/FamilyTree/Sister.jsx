import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Sister = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <p>Sister</p>
      <button className="btn" onClick={() => setMoney((prev) => prev + 50)}>
        Add 50 TK
      </button>
    </div>
  );
};

export default Sister;
