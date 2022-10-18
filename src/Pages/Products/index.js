import React from 'react'
import { Outlet } from 'react-router-dom'
import { Aside } from '../../Component/Aside/Aside'
import {  ProductProvider } from './productProvider'


const ProductPage = () => {
  return (
    <ProductProvider>
      <div className='container'>
        <div className='row'>
          <Aside />
          <Outlet></Outlet>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductPage;