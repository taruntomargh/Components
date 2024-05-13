import React, { useEffect, useState } from "react";

function useFetchHook(url, options = {}) {
  const [data, setData] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, {...options});
        const data1 = await response.json();
        if (data1) {
          setData(data1);
          setError(null);
          setPending(false);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[url]);

  return {data, error, pending};
  
}

const UseFetch = () => {

    const {data, error, pending} = useFetchHook("https://dummyjson.com/products", {});

  return <div className="flex flex-col justify-center items-center">
    <h3 className="text-2xl font-semibold">useFetch</h3>
    <div className="text-center">
    {pending ? <h3>Pending... Please wait.</h3> : null}
    {error ? <h3>{error}</h3> : null }
      {data.products?.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  </div>;
};

export default UseFetch;
