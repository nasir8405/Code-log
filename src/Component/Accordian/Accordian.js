import React, { useContext, useState } from "react";
import { Context } from "../../Pages/Accordian/AccordianProvider";
import "./Accordian.css";
export const Accordian = () => {
  const accoridanData = useContext(Context);
  const [activeState, setActiveState] = useState(null);
  const accordianBtn = (group) => {
    setActiveState(group);
    if (group === activeState) {
      setActiveState(null);
    }
  };
  return (
    <div className="container my-4">
      <div className="col-sm-12 col-md-12 col-lg-6 m-auto">
        {accoridanData.itemGroup.map((accordion, index) => {
          return (
            <div className="accordion" key={index}>
              <div className="accordion-item">
                <button
                  className={`accordion-header${
                    activeState === accordion.group ? " active" : " "
                  }`}
                  onClick={() => accordianBtn(accordion.group)}
                >
                  <strong>{accordion.title}</strong>
                  <i className="fas fa-angle-down"></i>
                </button>
                <div
                  className={`accordion-body${
                    activeState === accordion.group ? " active" : " "
                  }`}
                >
                  <ol>
                    {accoridanData.items.map((accordionContent, index) => {
                      return accordion.group === accordionContent.group ? (
                        <li key={index}>{accordionContent.title}</li>
                      ) : null;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
