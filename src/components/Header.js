import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  const navigate=useNavigate()
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    
  }).catch((error)=>{
    navigate("/error")

  });
}  
const handleLanguageChange=(e)=>{
  console.log(e.target.value)
dispatch(changeLanguage(e.target.value))
}
const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchView());
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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0'  
        alt="logo" 
        src={LOGO}/>
        {user&&
        <div className='flex p-2 justify-between'>
          {showGptSearch&&
          <select
          onChange={handleLanguageChange}
          className='p-3 bg-gray-900 text-white m-2'>
            {
              SUPPORTED_LANGUAGES.map((lang)=>
                ( 
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))
            }
           
          </select>}
          <button 
          onClick ={handleGptSearchClick}
          className='py-2 px-4 mx-4 my-2 bg-blue-700 text-white rounded-lg'>{showGptSearch?"home":"GPT Search"}</button>
          <img
          src={user?.photoURL}
          alt="userIcon"
          className='mx-1 w-10 hidden md:block'
          />
          <button className='text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header