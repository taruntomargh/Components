import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState();

  function handleBMI() {
    setBMI(parseFloat((weight / (height * height)).toFixed(1)));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">
        BMI Calculator
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4 bg-slate-200 p-4 w-9/12 h-64 rounded-md">
        <div className="flex gap-2">
          <label htmlFor="" className="text-xl  font-semibold">
            Weight (in kg)
          </label>
          <input
            onChange={(event) => setWeight(event.target.value)}
            value={weight}
            type="number"
            placeholder="Enter weight"
            className="outline-none rounded-md p-1"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="" className="text-xl  font-semibold">
            Height (in m)
          </label>
          <input
            onChange={(event) => setHeight(event.target.value)}
            value={height}
            type="number"
            placeholder="Enter height"
            className="outline-none rounded-md p-1"
          />
        </div>
        <button
          onClick={handleBMI}
          className="text-md text-white bg-blue-800 rounded-md p-2"
        >
          Calculate BMI
        </button>
        <div>{bmi}</div>
      </div>
    </div>
  );
};

export default BMICalculator;
