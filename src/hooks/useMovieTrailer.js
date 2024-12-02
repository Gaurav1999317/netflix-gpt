import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";


export const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo=useSelector(store=>store.trailerVideo);
    
    const getMovieVideos=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_Options);
        const json=await data.json();
        const filterData=json.results.filter(video=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
      }
      useEffect(()=>{
        !trailerVideo&&getMovieVideos();
      },[])

}