import { createContext, useReducer } from "react";
import { mockData } from "./mockData";
export const ProductContext = createContext();
const productsReducer = (state, action) => {
  switch (action.type) {
    case "all":
      const clonedState = { ...state };
      clonedState.selectedProducts = [...state.products];
      return clonedState;
    case "laptop":
      const laptopData = { ...state };
      const laptopD = laptopData.products.filter(
        (product) => product.type === action.type
      );
      laptopData.selectedProducts = laptopD;
      return laptopData;
    case "telivision":
      const tvData = { ...state };
      const newData = tvData.products.filter(
        (product) => product.type === action.type
      );
      tvData.selectedProducts = newData;
      return tvData;
    case "mobile":
      const mobileData = { ...state };
      const newMobileData = mobileData.products.filter(
        (product) => product.type === action.type
      );
      mobileData.selectedProducts = newMobileData;
      return mobileData;
    case "search":
      const searchData = { ...state };
      const newSearchData = searchData.products.filter(
        (product) =>
          product.type.includes(action.payload) ||
          product.description.includes(action.payload)
      );
      searchData.selectedProducts = newSearchData;
      return searchData;
    default:
      return { ...mockData };
  }
};
export const ProductProvider = (props) => {
  console.log(mockData);
  const [state, dispatch] = useReducer(productsReducer, mockData);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
