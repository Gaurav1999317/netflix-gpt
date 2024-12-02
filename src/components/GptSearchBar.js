import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'

import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_Options } from '../utils/constants';
import { addGeminiMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const languageChosen=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    const searchMovieTMDB=async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_Options);
        const json= await data.json();
        return json.results;

    }
    const handleGptSearchClick=async()=>{
        //console.log(searchText.current.value);
        //make an api call gpt api to get movie results
        const geminiQuery="Act as a movie Recommendation System and suggest some movies for the query"
        +searchText.current.value+
        " only give me names of 5 movies , comma seperated liek the example result given ahead . Exmaple Result: gadar, sholay, don, Golmal, koi mil gaya";
        const API_KEY=process.env.REACT_APP_Gemini_KEY;
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(geminiQuery);
        const geminiMovies=result.response.text().split(",");
        const promiseArray=await geminiMovies.map((movie)=>searchMovieTMDB(movie));
        const tmdbResults=await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGeminiMovieResult({movieNames:geminiMovies,movieResults:tmdbResults}));


    }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input
            ref={searchText}
            type="text" className='m-4 p-4 col-span-9' placeholder={lang[languageChosen].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 ' onClick={handleGptSearchClick}>{lang[languageChosen].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar