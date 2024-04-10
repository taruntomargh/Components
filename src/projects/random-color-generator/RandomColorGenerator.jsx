import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const RandomColorGenerator = () => {
  const [randomColor, setRandomColor] = useState(179116);
  const [colorMode, setColorMode] = useState(true);

  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  function randomHexColorGenerator() {
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
      randomNumber = randomNumber * 10 + Math.floor(Math.random() * 10);
    }
    console.log(randomNumber);
    setRandomColor(randomNumber);
    document.body.style.backgroundColor = `#${randomColor}`;
  }

  function randomRGBColorGenerator() {
    setR(Math.floor(Math.random() * 255));
    setG(Math.floor(Math.random() * 255));
    setB(Math.floor(Math.random() * 255));

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">
        Random Color Generator
      </h1>
      <div className="flex flex-col gap-2 justify-center items-center mt-2">
        <div className="flex gap-2">
          <button className={colorMode ? "text-md text-white bg-blue-800 rounded-md p-2" : "text-md text-blue-800 bg-white rounded-md p-2"} onClick={() => setColorMode(true)}>Hex Color</button>
          <button className={!colorMode ? "text-md text-white bg-blue-800 rounded-md p-2" : "text-md text-blue-800 bg-white rounded-md p-2"} onClick={() => setColorMode(false)}>RGB Color</button>
        </div>
        <button
          onClick={
            colorMode ? randomHexColorGenerator : randomRGBColorGenerator
          }
          className="text-md text-white bg-blue-800 rounded-md p-2"
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-center items-center mt-8">
        {colorMode ? (
          <span className="text-white text-8xl">#{randomColor}</span>
        ) : (
          <span className="text-white text-8xl">rgb({`${r},${g},${b}`})</span>
        )}
      </div>
    </div>
  );
};

export default RandomColorGenerator;
