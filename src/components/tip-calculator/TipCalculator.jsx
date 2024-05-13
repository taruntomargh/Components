import React, { useState } from 'react'

const TipCalculator = () => {

    const [billAmount, setBillAmount] = useState();
    const [tipPercent, setTipPercent] = useState();
    const [noOfPersons, setNoOfPersons] = useState();
    const [tip, setTip] = useState(0);
    const [totalBill, setTotalBill] = useState(0);
    const [split, setSplit] = useState(0);
    
    function handleCalculateTip(){

        const tipAmount = billAmount*(tipPercent/100);
         setTip(tipAmount);
         console.log(tipAmount);

         setTotalBill(billAmount + tipAmount);
         console.log(totalBill);

         setSplit(totalBill/noOfPersons);
         console.log(split);
    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className="text-2xl text-center bg-green-200 w-full">Tip Calculator</h1>
        <div className='flex flex-col justify-center items-center gap-4 mt-4 bg-slate-200 p-4 w-9/12 rounded-md'>
            <div className='flex justify-center items-center gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>Bill Amount</label>
                <input onChange={(event)=>setBillAmount(event.target.value)} type="text" className='outline-none p-2 rounded-md w-56' />
            </div>
            <div className='flex justify-center items-center gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>Tip Percentage</label>
                <input onChange={(event)=>setTipPercent(event.target.value)} type="text" className='outline-none p-2 rounded-md w-56' />
            </div>
            <div className='flex justify-center items-center gap-2'>
                <label htmlFor="" className='text-xl font-semibold'>No. of Persons</label>
                <input onChange={(event)=>setNoOfPersons(event.target.value)} type="text" className='outline-none p-2 rounded-md w-56' />
            </div>
            <button onClick={handleCalculateTip} className="text-md text-white bg-blue-800 rounded-md p-2">Calculate</button>
            <div>
                <p>Tip Amount : {tip}</p>
                <p>Total Bill : {totalBill}</p>
                <p>Split Amount : {split}</p>
            </div>
        </div>
    </div>
  )
}

export default TipCalculator