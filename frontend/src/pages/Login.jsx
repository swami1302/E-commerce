import React, { useState } from 'react'

function Login() {
  const [currentState, setcurrentState] = useState('Sign Up');

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    console.log("Form submit");
    
  }

  return (
    <form onSubmit={(e)=>onSubmitHandler(e)} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 '/>
      </div>
      {currentState==='Login'? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800 '  placeholder='name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800 '  placeholder='email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800 '  placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer '>Forgot your password?</p>
        {
          currentState==='Login'
          ? <p className='cursor-pointer capitalize' onClick={()=>setcurrentState('Sign Up')}>Create Account</p>
          : <p className='cursor-pointer capitalize' onClick={()=>setcurrentState('Login')}>Login here</p>

        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 capitalize'>{currentState==='Login' ? 'Sign in' : 'Sign up'}</button>
    </form>
  )
}

export default Login