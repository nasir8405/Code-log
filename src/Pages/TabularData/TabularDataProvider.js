import React, { createContext } from "react";
import { tabularData } from "./mockData";
export const Context = createContext();

export const TabularDataProvider = (props) => {
  return (
    <div className="container">
      <Context.Provider value={tabularData}>{props.children}</Context.Provider>
    </div>
  );
};
