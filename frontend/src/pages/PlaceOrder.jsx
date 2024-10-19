import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
  const [method, setmethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-xol sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side  */}
      <div className='flex flex-col gap-4 sm:max-w[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3 '>
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
          <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
        </div>
          <input type="text" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
          <input type="text" placeholder='street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
        <div className='flex gap-3 '>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
        </div>
        <div className='flex gap-3 '>
          <input type="number" placeholder='Zip code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
        </div>
        <input type="number" placeholder='phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full capitalize'/>
      </div>
      {/* Rigth Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400': ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400': ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400': ''}`}></p>
              {/* <img className='h-5 mx-4' src={assets.stripe_logo} alt="" /> */}
              <p className='uppercase text-gray-500 text-sm font-medium mx-4'>cash on delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='uppercase bg-black text-white px-16 py-3 text-sm'>place order</button>
          </div>
        </div>
      </div>
      Place Order
    </div>
  )
}

export default PlaceOrder