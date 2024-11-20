import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div>
          <img className='absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg'
          alt="bg "
          />
        </div >
        <form className='absolute bg-black  p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80' >
          <h1 className='font-bold text-3xl py-4 '>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm&&<input types="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>}
          <input types="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>
          <input types="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>
          <button className='p-2 my-6 bg-red-700 opacity-100 w-full rounded-sm '>{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={()=>toggleSignInForm()}> {isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In "} </p>
        </form>
        </div>
        
        
  )
}

export default Login