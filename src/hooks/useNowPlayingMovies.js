import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

export const useNowPlayingMovies=()=>{
    const dispatch= useDispatch();
    const nowPlayingMovies=useSelector(store=>store.nowPlayingMovies);
    const getNowPlayingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_Options);
        const json=await data.json();
        
        dispatch(addNowPlayingMovies(json.results));

    }
    useEffect(()=>{
        !nowPlayingMovies&&getNowPlayingMovies();
    },[])
    
}