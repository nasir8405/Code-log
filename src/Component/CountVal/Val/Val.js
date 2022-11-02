import React, { useContext } from "react";
import { Context } from "../../../Pages/Counter/CouterProvider";
import { DecreaseBtn } from "../Button/DecreaseBtn";
import { IncreaseBtn } from "../Button/IncreaseBtn";

export const Val = () => {
  const context = useContext(Context);
  return (
    <div className="count">
      <div>Val : {context.state.valState}</div>
      <IncreaseBtn val="val" />
      <DecreaseBtn val="val" />
    </div>
  );
};
