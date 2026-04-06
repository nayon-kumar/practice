import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div className="boder-2 m-5">
      <p>Dad</p>
      <div className="boder-2 flex gap-5 m-5">
        <Myself />
        <Brother />
        <Sister />
      </div>
    </div>
  );
};

export default Dad;
