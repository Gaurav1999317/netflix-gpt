
import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse=()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
   useTopRatedMovies();
   const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
   
    return(
        <div>
            
            <Header/>
           {showGptSearch? 
           <GptSearch/>:
           <><MainContainer/>
            <SecondaryContainer/>
            </>}
            
        </div>
    )
}
export default Browse;

//https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN…IvDdd78RjOOgxGlfr0zETjXfWJfDHoJAxQw6fqU.png?r=4b9