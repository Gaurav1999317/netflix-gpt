
import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse=()=>{
    useNowPlayingMovies();
   
    return(
        <div>
            
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;

//https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN…IvDdd78RjOOgxGlfr0zETjXfWJfDHoJAxQw6fqU.png?r=4b9