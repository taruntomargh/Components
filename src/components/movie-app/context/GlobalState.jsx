import { createContext, useState } from "react";

export const MovieContext = createContext(null);

function GlobalState({children}){

    const [searchMovieParam, setSearchMovieParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [movieResults, setMovieResults] = useState([]);

    console.log(searchMovieParam);

    return <MovieContext.Provider value={{searchMovieParam, setSearchMovieParam}}>{children}</MovieContext.Provider>
}

export default GlobalState;