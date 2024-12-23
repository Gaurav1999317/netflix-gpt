import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { API_Options } from "../utils/constants";

export const useUpcomingMovies=()=>{
    const dispatch= useDispatch();
    const upcomingMovies=useSelector(store=>store.upcomingMovies);
    const getUpcomingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_Options);
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        !upcomingMovies&&getUpcomingMovies();
    },[])
    
}
