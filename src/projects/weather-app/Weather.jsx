import React, { useState } from 'react'

const Weather = () => {

    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchData(){
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=1f75396388cfaf5295518ae27418af1b
            `);
            const data = await response.json();
            console.log(data);
            if(data){
                setWeatherData(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function handleSearch(){
        fetchData();
    }

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200">Weather App</h1>
        <div className='flex flex-col justify-center items-center gap-2 mt-2'>
            <div className='flex gap-2'>
                <input type="text" placeholder='Enter city name' value={search} onChange={(event)=>setSearch(event.target.value)} className='w-72 text-md bg-gray-200 rounded-md p-2 placeholder-gray-800 outline-none'/>
                <button onClick={handleSearch} className='text-md text-white bg-blue-800 rounded-md p-2'>Search</button>
            </div>
            <div>
                {loading ? <h3>Loading... Please Wait.</h3> : <div>Weather Data</div>}
            </div>
        </div>
    </div>
  )
}

export default Weather