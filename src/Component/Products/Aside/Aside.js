import React, { lazy, Suspense, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../../Pages/Products/ProductProvider";
import "./Aside.css";
// import ProductModal from '../Products/Modal/ProductModal';
const ProductModal = lazy(() => import("../Modal/ProductModal"));
// console.log(ProductModal)

export const Aside = () => {
  const Context = useContext(ProductContext);
  const { productType } = Context.state;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-3">
      <ul className="list-none">
        {productType.map((product) => {
          return (
            <li key={product.id}>
              <NavLink to={product.type}>{product.type}</NavLink>
            </li>
          );
        })}
        <li className="p-3">
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>
        </li>
      </ul>
      {show && (
        <Suspense fallback={<></>}>
          <ProductModal show={show} handleClose={handleClose} />
        </Suspense>
      )}

      {/* <ProductModal show={show} handleClose={handleClose}/> */}
    </div>
  );
};
