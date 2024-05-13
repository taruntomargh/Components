import React, { useEffect, useState } from "react";

const CurrencyConvertor = () => {
    const[loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState();
  const [exchangeRate, setExchangeRate] = useState();

    async function fetchExchangeRate(){
        try {
            const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
            const result = await response.json();

            const calculatedRate = result.rates[toCurrency];
            setExchangeRate(calculatedRate);

            setConvertedAmount((amount*calculatedRate).toFixed(2));
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }

  useEffect(()=>{
    fetchExchangeRate();
  },[fromCurrency, toCurrency, amount]);

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Currency Convertor</h1>
      {loading ? <p className="text-center">Loading... Please Wait.</p> : <div className="flex flex-col justify-center items-center mt-4 gap-4">
        <div className="flex gap-2">
          <input
            value={amount}
            type="text"
            onChange={(event) => setAmount(event.target.value)}
            className="outline-none bg-gray-200 rounded-md p-2"
          />
          <select value={fromCurrency} onChange={(event)=>setFromCurrency(event.target.value)} className="outline-none bg-gray-200 rounded-md p-2">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <p>To</p>
        <div className="flex gap-2">
          <input
            value={convertedAmount}
            type="text"
            onChange={(event) => setConvertedAmount(event.target.value)}
            className="outline-none bg-gray-200 rounded-md p-2"
          />
          <select value={toCurrency} onChange={(event)=>setToCurrency(event.target.value)} className="outline-none bg-gray-200 rounded-md p-2">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <p>Exchange Rate is 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
      </div>}
    </div>
  );
};

export default CurrencyConvertor;
