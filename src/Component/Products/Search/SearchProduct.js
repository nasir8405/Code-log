import React, { useContext, useState } from "react";
import { ProductContext } from "../../../Pages/Products/ProductProvider";

export const SearchProduct = () => {
  const context = useContext(ProductContext);
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value.toLowerCase());
  };
  const searchHandle = () => {
    context.dispatch({ type: "search", payload: inputVal });
    setInputVal("");
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="Please Enter text"
        value={inputVal}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" className="form-btn" onClick={() => searchHandle()}>
        Submit
      </button>
    </form>
  );
};
