import React, { createContext, useReducer } from "react";
import { initialState } from "./mockData";

export const Context = createContext();
const rootReducer = (state, action) => {
  console.log();
  switch (action.type) {
    case "INCREASECOUNT":
      return { ...state, countState: state.countState + 1 };
    case "DECREASECOUNT":
      if (state.countState > 0) {
        return { ...state, countState: state.countState - 1 };
      } else {
        return { ...state, countState: state.countState };
      }
    case "INCREASEVAl":
      return { ...state, valState: state.valState + 1 };
    case "DECREASEVAl":
      if (state.valState > 0) {
        return { ...state, valState: state.valState - 1 };
      } else {
        return { ...state, valState: state.valState };
      }
    default:
      return state;
  }
};
export const CouterProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
