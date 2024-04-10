import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(900);
  const [isRunning, setIsRunning] = useState(false);
  const intervalReference = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalReference.current);
            setIsRunning(false);

            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalReference.current);
    }

    return () => {
      clearInterval(intervalReference.current);
    };
  }, [isRunning]);

  function handlePauseAndResume() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    clearInterval(intervalReference.current)
    setTime(900);
    setIsRunning(false);
  }

  function handleStart() {
    setIsRunning(true);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Timer</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold text-blue-600">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePauseAndResume}
            className="text-md text-white bg-blue-800 rounded-md p-2 w-20"
          >
            {isRunning ? "Pause" : "Resume"}
          </button>
          <button
            onClick={handleReset}
            className="text-md text-white bg-blue-800 rounded-md p-2"
          >
            Reset
          </button>
          <button
            onClick={handleStart}
            className="text-md text-white bg-blue-800 rounded-md p-2"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
