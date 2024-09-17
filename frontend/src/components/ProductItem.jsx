import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function ProductItem({id,image,price,name}) {
    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
        </div>
        <p className='pt-3 text-sm ob-1 mb-3'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>

    </Link>
  )
}

export default ProductItem