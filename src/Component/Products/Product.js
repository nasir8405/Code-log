import React from 'react'

export const Product = ({data}) => {
  console.log(data)
  return (
    <div className='col-4 my-3'>
      <div className="card">
        <img src={data.url} className="card-img-top" alt="product"/>
          <div className="card-body">
            <h5 className="card-title">{data.type}</h5>
            <p className="card-text">{data.description}</p>
          </div>
      </div>
    </div>
  )
}
