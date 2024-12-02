import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidData } from '../utils/checkValidData';
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';



const Login = () => {
  
  const dispatch=useDispatch();
  
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  const email=useRef(null);
  const password=useRef(null);
  const name =useRef(null);
  const [errorMessage,setErrorMessage]=useState(null);
function handleClick(){
 
setErrorMessage(checkValidData(email.current.value,password.current.value));
 if(errorMessage!=null)return;
if(isSignInForm){
  //signInLogic
  signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredentials)=>{
   
   
   
  }).catch((error)=>{
    setErrorMessage(error.code+":"+error.message)
  })
}
else if(!isSignInForm){
  //signUpLogic
  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredentials)=>{
    const user= userCredentials.user
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/73055274?v=4"
    }).then(() => {
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({
        email:email,
        uid:uid,
        displayName:displayName,
        photoURL:photoURL
    }));

    
    }).catch((error) => {
     setErrorMessage(error.message);
    });
   

  }).catch((error)=>{
    setErrorMessage(error.code+":"+error.message);
  });
  

}

}
  return (
    <div>
        <Header/>
        <div>
          <img className='absolute h-screen w-screen object-cover'
          src={BG_URL}
          alt="bg "
          />
        </div >
        <form onSubmit={(e)=>e.preventDefault()} 
        className='absolute bg-black  p-12 w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80' >
          <h1 className='font-bold text-3xl py-4 '>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm&&<input ref={name} types="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>}
          <input ref={email} types="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>
          <input ref={password} types="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-800 border border-gray-300 rounded-sm'/>
          <p className='text-red-700 '>{errorMessage}</p>
          <button className='p-2 my-6 bg-red-700 opacity-100 w-full rounded-sm ' onClick={()=>handleClick()}>{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={()=>toggleSignInForm()}> {isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In "} </p>
        </form>
        </div>
        
        
  )
}

export default Login