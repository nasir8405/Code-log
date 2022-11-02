import React, { useContext } from "react";
import { IoIosRemove } from "react-icons/io";
import { Context } from "../../Pages/AccordianDrag/AccordianDragProvider";

export const StateDetail = () => {
  const context = useContext(Context);
  const { removedState } = context.reducerState;
  const addState = (state) => {
    context.dispatch({ type: "ADDDATA", payload: state });
  };
  return (
    <div>
      {removedState.map((item) => {
        return (
          <h1 key={item.id}>
            {item.state}{" "}
            <button className="icon-btn" onClick={() => addState(item.state)}>
              {<IoIosRemove />}
            </button>
          </h1>
        );
      })}
    </div>
  );
};
