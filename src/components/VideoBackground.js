
import { useSelector } from 'react-redux'

import { useMovieTrailer } from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId)
  
  
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
  //fetching the trailer video and updating the store with trailer video data
  
  return (
    <div>
      <iframe 
      className='w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=EagrP9O8vXbzSCal"+"?&autoplay=1&mute=1" }
     title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe></div>
  )
}

export default VideoBackground