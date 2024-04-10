import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState(null);

  async function fetchQuote() {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const result = await response.json();

      if (result && result.length) {
        setIsLoading(false);
        setQuote(result[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh(){
    fetchQuote();
  }

  if(isLoading){
    return <h3>Loading... Please Wait.</h3>
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Quote Generator</h1>
      <div className="flex flex-col justify-center items-center gap-2 mt-2">
        <div className="flex flex-col gap-2 w-9/12 h-36 bg-black text-white rounded-md p-1">
        <h3 className="text-center text-4xl font-semibold">{quote.author}</h3>
        <p className="text-center text-xl">{quote.content}</p>
        </div>
        <button onClick={handleRefresh} className="text-md text-white bg-blue-800 rounded-md p-2">Refresh</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
