import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Pages/Products/productProvider'
import { Product } from './Product'
import "./Products.css"

export const Products = () => {
  const context = useContext(ProductContext)
  const params = useParams()
  const { selectedProducts } = context.state;
  useEffect(() => {
    context.dispatch({ type: params.type })
  }, [params.type])

  return (
    <div className='col-9'>
      <div className='row'>
        <form action="">
          <input type="text" placeholder='Please Enter text' />
          <button className='form-btn'>Submit</button>
        </form>
        {selectedProducts.map(data => {
          return <Product key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}
