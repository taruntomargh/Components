import React, { useState } from "react";
import array from "./data";

const ImageSlider = () => {
  const [images, setImages] = useState(array);
  const [currentSlide, setCurrentSlide] = useState(1);

  console.log(images);

  function handleNext() {
    setCurrentSlide(currentSlide === images.length ? 1 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 1 ? images.length : currentSlide - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl text-center bg-green-200">Image Slider</h1>
      <div className="flex gap-4">
        {images.map((data) => {
          return (
            <div key={data.id} className={data.id === currentSlide ? "block" : "hidden"}>
              <img src={data.url} alt={`Images ${data.id}`} width={300} height={300} />
            </div>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 rounded-md text-md bg-white"
          onClick={() => handlePrevious()}
        >
          Previous
        </button>
        <button
          className="p-2 rounded-md text-md bg-white"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
