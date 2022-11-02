import React, { useContext } from "react";
import { Context } from "../../../Pages/Counter/CouterProvider";
import { DecreaseBtn } from "../Button/DecreaseBtn";
import { IncreaseBtn } from "../Button/IncreaseBtn";

export const Count = () => {
  const context = useContext(Context);
  return (
    <div className="count">
      <div>Count : {context.state.countState}</div>
      <IncreaseBtn count="count" />
      <DecreaseBtn count="count" />
    </div>
  );
};
