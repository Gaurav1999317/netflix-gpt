import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const gemini =useSelector(store=>store.gpt);
    const {movieResults,movieNames}=gemini;
    if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black bg-opacity-70 text-white'>
        <div>
            {
                movieNames.map((movieNames, index)=>(
                    <MovieList key={movieNames} title={movieNames} movies={movieResults[index]}>

                    </MovieList>
                ))
            }
        </div>
    </div>
  )
}

export default GptMovieSuggestion