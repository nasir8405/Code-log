import React from "react";
import { Count } from "../../Component/CountVal/Count/Count";
import { Val } from "../../Component/CountVal/Val/Val";
import { CouterProvider } from "./CouterProvider";
import "./Counter.css";

const CounterPage = () => {
  return (
    <div className="container my-5">
      <CouterProvider>
        <div className="row">
          <div className="col-6 count-val-wrapper">
            <Count />
            <Val />
          </div>
        </div>
      </CouterProvider>
    </div>
  );
};

export default CounterPage;
