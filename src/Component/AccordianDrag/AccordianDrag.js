import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsArrowRight } from "react-icons/bs";
import { Context } from "../../Pages/AccordianDrag/AccordianDragProvider";

export const AccordianDrag = () => {
  const context = useContext(Context);
  const { selectedState } = context.reducerState;
  const { countries } = context.reducerState;
  const handleDispatch = (group) => {
    for (let i = 0; i < countries.length; i++) {
      if (group === countries[i].group) {
        context.dispatch({ type: "SUCCESS", payload: group });
      }
    }
  };
  const handleStateDispatch = (state, index) => {
    context.dispatch({ type: "REMOVE", payload: state, index: index });
  };
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {countries.map((item, index) => {
          return (
            <Accordion.Item eventKey={index} key={item.id}>
              <Accordion.Header
                className="accordion-header1"
                onClick={() => handleDispatch(item.group)}
              >
                {item.country}
              </Accordion.Header>
              <Accordion.Body className="accordion-body1">
                <ul>
                  {selectedState.map((item, index) => {
                    return (
                      <li key={item.id}>
                        {item.state}
                        <button
                          className="icon-btn"
                          onClick={() => handleStateDispatch(item.state, index)}
                        >
                          {<BsArrowRight />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
