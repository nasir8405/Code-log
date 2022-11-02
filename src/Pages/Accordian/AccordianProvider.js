import React, { createContext } from "react";
import { Accordian } from "../../Component/Accordian/Accordian";
import { accoridanData } from "./mockData";
export const Context = createContext();

export const AccordianProvider = (props) => {
  return (
    <div>
      <Context.Provider value={accoridanData}>
        {props.children}
      </Context.Provider>
    </div>
  );
};
