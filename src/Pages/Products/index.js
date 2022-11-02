import React from "react";
import { Outlet } from "react-router-dom";
import { Aside } from "../../Component/Products/Aside/Aside";
import { ProductProvider } from "./ProductProvider";

const ProductPage = () => {
  return (
    <ProductProvider>
      <div className="container my-3">
        <div className="row">
          <Aside />
          <Outlet></Outlet>
        </div>
      </div>
    </ProductProvider>
  );
};

export default ProductPage;
