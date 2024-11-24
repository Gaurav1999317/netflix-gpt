import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate()
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    navigate("/");
  }).catch((error)=>{
    navigate("/error")

  });
}  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 justify-between flex'>
        <img className='w-44' 
        alt="logo" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        {user&&<div className='flex items-center'>
          <img
          src={user?.photoURL}
          alt="userIcon"
          className='mx-1 w-10'
          />
          <button className='text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header