import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
    //   console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleScroll(){
    setScrollPercentage();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Scroll Indicator</h1>
      <div className="w-96 bg-violet-800 h-4"></div>
      <div>
        {data.products?.map((item) => (
          <div key={item.id} className="text-center">
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
