import React, { useContext } from "react";
import { Context } from "../../../Pages/Counter/CouterProvider";

export const IncreaseBtn = (props) => {
  const context = useContext(Context);
  const increase = () => {
    if (props.count) {
      context.dispatch({ type: "INCREASECOUNT" });
    } else {
      context.dispatch({ type: "INCREASEVAl" });
    }
  };
  return (
    <div>
      <button onClick={() => increase(props)}>Increase</button>
    </div>
  );
};
