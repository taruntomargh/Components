import React, { useEffect, useState } from "react";

function ShowDropDown({ data, handleClick }){
    return(
        <ul className="flex flex-col w-72 bg-white shadow-xl mt-1">
            {data.map((item, index) => <li key={index} className="list-none cursor-pointer hover:bg-slate-200 p-2 text-lg" onClick={handleClick}>{item}</li>)}
        </ul>
    )
            
}

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [error, setError] = useState(null);

  async function fetchLists() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data) {
        setLoading(false);
        setUsers(
          data.users && data.users.length ? data.users.map((item) => item.firstName) : null
        );
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchLists();
  }, []);

  function handleChange(event){
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if(query.length > 1){
        const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
        setFilteredUsers(filteredData);
        setShowDropDown(true);
    } else {
        setShowDropDown(false);
    }
  }

  function handleClick(event){
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
    setShowDropDown(false);
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Search Autocomplete</h1>
      {loading ? <h3 className="text-center">Loading... Please Wait.</h3> :  <div className="flex flex-col justify-center items-center mt-4">
        <input
          value={searchParam}
          type="text"
          placeholder="Search any text..."
          className="text-xl bg-slate-200 p-2 rounded-md placeholder-slate-800 outline-none w-72"
          onChange={handleChange}
        />
        {showDropDown ? <ShowDropDown handleClick={handleClick} data={filteredUsers}/> : null}
      </div>}
    </div>
  );
};

export default SearchAutocomplete;
