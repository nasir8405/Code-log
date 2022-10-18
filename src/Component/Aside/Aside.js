import React, { lazy, Suspense, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
// import ProductModal from '../Products/Modal/ProductModal';
const ProductModal = lazy(()=> import('../Products/Modal/ProductModal'));
// console.log(ProductModal)


export const Aside = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='col-3'>
      <ul className='list-none'>
        <li className='p-3'><NavLink to="all">All</NavLink ></li>
        <li className='p-3'><NavLink to="tv" >Tv</NavLink ></li>
        <li className='p-3'><NavLink to="mobile">Mobile</NavLink ></li>
        <li className='p-3'>
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>
        </li>
      </ul>
      {show && <Suspense fallback={<></>}>
        <ProductModal show={show} handleClose={handleClose}/>
      </Suspense>}

      {/* <ProductModal show={show} handleClose={handleClose}/> */}
    </div>
  )
}
