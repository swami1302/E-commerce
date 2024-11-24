import React from 'react'
import { assets } from '../assets/assets';

function Navbar({settoken}) {
  return (
    <div className='flex justify-between items-center px-[4%] py-2'>
        <img src={assets.logo} alt="" className='w-[max(10%,80px)]' />
        <button onClick={() => settoken('')} className='bg-gray-600 text-white px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar