import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:pt-[14%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold text-white'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-lg w-1/4 text-white'>{overview}
      </p>
      
      <div>
        <button className='bg-white my-2 text-black py-1 md:py-4 md:px-10 px-3 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-2 px-10 text-xl rounded-lg bg-opacity-50' >ℹ️ More Info</button>
        </div>
        </div>
  )
}

export default VideoTitle