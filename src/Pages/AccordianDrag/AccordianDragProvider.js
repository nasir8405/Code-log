import React, { createContext, useReducer } from "react";
import { LeftSide } from "../../Component/AccordianDrag/LeftSide";
import { RightSide } from "../../Component/AccordianDrag/RightSide";
import { accordianDragData } from "./mockData";
export const Context = createContext();
const reducer = (reducerState, action) => {
  switch (action.type) {
    case "SUCCESS":
      const indiaData = reducerState.states.filter((item) => {
        return item.group === action.payload;
      });
      return { ...reducerState, selectedState: indiaData };
    case "REMOVE":
      const removedData = reducerState.selectedState.filter((item) => {
        return item.state === action.payload;
      });
      const updatedSelectedState = reducerState.selectedState.filter((item) => {
        return item.state !== action.payload;
      });
      return {
        ...reducerState,
        removedState: removedData,
        selectedState: updatedSelectedState,
        index: action.index,
      };
    case "ADDDATA":
      const addedData = reducerState.removedState.find((item) => {
        return item.state === action.payload;
      });
      const updatedRemovedState = reducerState.removedState.filter((item) => {
        return item.state !== action.payload;
      });
      reducerState.selectedState.splice(reducerState.index, 0, addedData);
      return {
        ...reducerState,
        selectedState: reducerState.selectedState,
        removedState: updatedRemovedState,
      };

    default:
      return reducerState;
  }
};
export const AccordianDragProvider = () => {
  const [reducerState, dispatch] = useReducer(reducer, accordianDragData);
  return (
    <Context.Provider value={{ reducerState, dispatch }}>
      <div className="container my-4">
        <div className="row">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </Context.Provider>
  );
};
