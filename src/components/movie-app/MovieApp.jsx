import React, { useContext, useEffect } from "react";
import { MovieContext } from "./context/GlobalState";

const MovieApp = () => {
  const { searchMovieParam, setSearchMovieParam } = useContext(MovieContext);

  async function fetchListOfMovies(){}

  useEffect(()=>{
    fetchListOfMovies();
  },[]);

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200 w-full">Movie App</h1>
      <div className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="Search any movie"
          value={searchMovieParam}
          onChange={(event) => setSearchMovieParam(event.target.value)}
          className=" outline-none rounded-md p-2 bg-slate-200 w-72"
        />
      </div>
    </div>
  );
};

export default MovieApp;
