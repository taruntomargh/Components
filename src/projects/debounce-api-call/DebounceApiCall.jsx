import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const DebounceApiCall = () => {
  const [searchParam, setSearchParam] = useState("apple");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  const debounceValue = useDebounce(searchParam, 5000);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceValue}`
      );
      const result = await apiResponse.json();
      // console.log(result.recipes);

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes("");
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceValue]);

  // console.log(recipes);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">
        Debounce API Call
      </h1>
      <div className="flex flex-col items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter any text"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          className="bg-gray-200 rounded-md p-2 outline-none w-72"
        />
        {pending ? <h3>Pending... Please Wait.</h3> : null}
        {recipes && recipes.length > 0 && pending===false ? (
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.name}</li>
            ))}
          </ul>
        ) : <h3>Nothing Found. Please try something else.</h3>}
      </div>
    </div>
  );
};

export default DebounceApiCall;
