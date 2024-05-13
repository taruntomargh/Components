import React, { useRef } from "react";

const ScrollToParticularSection = () => {
  const data = [
    {
      id:1,
      label: "First Card",
      style: {
        width: "500px",
        height: "500px",
        backgroundColor: "red",
      },
    },
    {
        id:2,
      label: "Second Card",
      style: {
        width: "500px",
        height: "500px",
        backgroundColor: "green",
      },
    },
    {
        id:3,
      label: "Third Card",
      style: {
        width: "500px",
        height: "500px",
        backgroundColor: "blue",
      },
    },
    {
        id:4,
      label: "Fourth Card",
      style: {
        width: "500px",
        height: "500px",
        backgroundColor: "gray",
      },
    },
    {
        id:5,
      label: "Fifth Card",
      style: {
        width: "500px",
        height: "500px",
        backgroundColor: "orange",
      },
    },
  ];

  const ref = useRef();

  function handleScrollToParticularSection(){
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Scroll Top Bottom</h1>
      <div className="flex flex-col justify-center items-center gap-4 mt-2">
        <button onClick={handleScrollToParticularSection} className="text-xl bg-blue-600 rounded-md p-2">Scroll to third card</button>
        {data.map((item, index) => (
          <div ref={index === 2 ? ref : null} style={item.style}>{item.label}</div>
        ))}
      </div>
    </div>
  );
};

export default ScrollToParticularSection;
