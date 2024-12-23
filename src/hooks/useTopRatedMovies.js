import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

export const  useTopRatedMovies=()=>{
    const dispatch= useDispatch();
    const topRatedMovies=useSelector(store=>store.topRatedMovies)
    const getTopRatedMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_Options);
        const json=await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(()=>{
        !topRatedMovies&&getTopRatedMovies();
    },[])
    
}
