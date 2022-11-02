import React, { createContext } from "react";
import { LeftSide } from "../../Component/AccordianDrag/LeftSide";
import { RightSide } from "../../Component/AccordianDrag/RightSide";
import { AccordianDragProvider } from "./AccordianDragProvider";
import "./AccordianDrag.css";
export const Context1 = createContext();
const AccordianDragPage = () => {
  return (
    <AccordianDragProvider>
      <div className="container my-4">
        <div className="row">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </AccordianDragProvider>
  );
};

export default AccordianDragPage;
