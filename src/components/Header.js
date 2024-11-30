import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'

const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user);
  const navigate=useNavigate()
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    
  }).catch((error)=>{
    navigate("/error")

  });
}  
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
          //user is already logged in or signed up
          const {uid,email,displayName,photoURL}=user;
          dispatch(addUser({
              email:email,
              uid:uid,
              displayName:displayName,
              photoURL:photoURL
          }));
          navigate("/browse")
      }
      else{
          dispatch(removeUser());
          navigate("/");
      }
  });
  //unsubscribe when component unmount
  return ()=>unsubscribe();
},[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 justify-between flex'>
        <img className='w-44' 
        alt="logo" 
        src={LOGO}/>
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