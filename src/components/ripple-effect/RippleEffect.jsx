import React, { useState } from 'react'

const RippleEffect = () => {

    const [isRipplingEffect, setIsRipplingEffect] = useState(false);
    const [coordinates, setCoordinates] = useState({});

    function handleRippleEffect(){

    }

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200 w-full">
        Button Ripple Effect
      </h1>
      <div className='flex justify-center items-center mt-4'>
        <button onClick={handleRippleEffect} className="text-md text-white bg-blue-800 rounded-md p-2">Click here to view Ripple Effect</button>
      </div>
    </div>
  )
}

export default RippleEffect