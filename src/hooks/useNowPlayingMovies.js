import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

export const useNowPlayingMovies=()=>{
    const dispatch= useDispatch();
    const getNowPlayingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_Options);
        const json=await data.json();
        
        dispatch(addNowPlayingMovies(json.results));

    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    
}