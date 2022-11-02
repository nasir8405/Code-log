import React, { useContext } from "react";
import { Context } from "../../../Pages/Counter/CouterProvider";

export const DecreaseBtn = (props) => {
  const context = useContext(Context);
  const decrease = () => {
    if (props.count) {
      context.dispatch({ type: "DECREASECOUNT" });
    } else {
      context.dispatch({ type: "DECREASEVAl" });
    }
  };
  return (
    <div>
      <button onClick={() => decrease(props)}>Decrease</button>
    </div>
  );
};
