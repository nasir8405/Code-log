import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Pages/Products/ProductProvider";
import { Product } from "./Product";
import "./Products.css";
import { SearchProduct } from "./Search/SearchProduct";

export const Products = () => {
  const context = useContext(ProductContext);
  const params = useParams();
  const { selectedProducts } = context.state;
  useEffect(() => {
    context.dispatch({ type: params.type });
  }, [params.type]);
  return (
    <div className="col-9">
      <SearchProduct />
      <div className="row">
        {selectedProducts.map((data) => {
          return <Product key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};
