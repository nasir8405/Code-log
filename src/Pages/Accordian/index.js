import React from "react";
import { Accordian } from "../../Component/Accordian/Accordian";
import { AccordianProvider } from "./AccordianProvider";

const AccordianPage = () => {
  return (
    <AccordianProvider>
      <Accordian />
    </AccordianProvider>
  );
};

export default AccordianPage;
