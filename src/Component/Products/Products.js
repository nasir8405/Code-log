import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Pages/Products/productProvider'
import { Product } from './Product'

export const Products = () => {
  const context = useContext(ProductContext)
  const params = useParams()
  console.log(context.state.productData)
  const { selectedProducts } = context.state.productData;
  useEffect(()=> {
    context.dispatch({type: params.type})
  }, [params.type])
  
  return (
    <div className='col-9'>
      <div className='row'>
        {selectedProducts.map(data=> {
          return <Product key={data.id} data={data}/>
        })}
      </div>
    </div>
  )
}
