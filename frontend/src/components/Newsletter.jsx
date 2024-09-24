import React from 'react'

function Newsletter() {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ipsum.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='enter you email id'  className='w-full sm:flex-1 outline-none  ' required/>
            <button type="submit" className='uppercase bg-black text-white text-xs px-10 py-4'>subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter