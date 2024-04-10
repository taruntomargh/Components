import React, { useEffect, useRef, useState } from "react";
import useFetchHook from "../custom-hooks/hooks/UseFetch";

const ScrollTopBottom = () => {
  const [data, setData] = useState({});
  const bottomRef = useRef(null);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const responseData = await response.json();
      // console.log(responseData);
      if (responseData) {
        setData(responseData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior: 'smooth'});
  }

  function handleScrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Scroll Top Bottom</h1>
      <div className="flex flex-col justify-center items-center mt-2">
        <h3>Top Section</h3>
        <button onClick={handleScrollToBottom} className="text-xl bg-blue-400 rounded-md p-2">Scroll to Bottom</button>
        <ul>
          {data.products?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div ref={bottomRef}>
        </div>
        <button onClick={handleScrollToTop} className="text-xl bg-blue-400 rounded-md p-2">Scroll to Top</button>
        <h3>Bottom Section</h3>
      </div>
    </div>
  );
};

export default ScrollTopBottom;
