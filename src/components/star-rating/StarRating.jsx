import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = () => {
  const array = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index){
    setRating(index);
  }

  const handleMouseEnter = (index) => {
    setHover(index);
  }

  const handleMouseLeave = () => {
    setHover(0);
  }

  return (
    <>
      <h1 className="text-2xl text-center bg-green-200">Star Rating</h1>
      <div className="flex justify-center mt-2">
        {array.map((index) => {
          return(
              <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`${index <= ( hover || rating ) ? "text-yellow-400" : null}`}
              size={40}
            />
        )})}
      </div>
    </>
  );
};

export default StarRating;
