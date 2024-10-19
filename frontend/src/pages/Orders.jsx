import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { products } from '../assets/frontend_assets/assets';

function Orders() {
  const {prpducts, currency} = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div className=''>
        {
          products.slice(0,4).map((item,index)=>{
            return <div className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p >Quantity : 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>19, Oct, 2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between '>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='capitalize text-sm md:text-base'>ready to ship</p>
                </div>
                <button className='capitalize border px-4 py-2 text-sm font-medium rounded-sm'>track order</button>
              </div>
            </div>
          })
        }
      </div>
      
    </div>
  )
}

export default Orders