import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
function Login({settoken}) {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(email,password);
      const response = await axios.post(backendUrl+'/api/user/adminLogin',{email,password});
      // console.log(response);
      if(response.data.success){
        settoken(response.data.token);
      }else{
        toast.error(response.data.msg);
        console.log(response.data.msg);
        
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message); 
      
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
          <form action="" onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
              <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" name="" id="" placeholder='your@email.com' required onChange={(e)=>setemail(e.target.value)} value={email}/>
            </div>
            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
              <input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" name="" id="" placeholder='Enter your password' required onChange={(e)=>setpassword(e.target.value)} value={password}/>
            </div>
            <button type="submit" className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login