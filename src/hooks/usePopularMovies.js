import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

export const usePopularMovies=()=>{
    const dispatch= useDispatch();
    const popularMovies=useSelector(store=>store.popularMovies)
    const getPopularMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_Options);
        const json=await data.json();   
        dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        !popularMovies&&getPopularMovies();
    },[])
    
}