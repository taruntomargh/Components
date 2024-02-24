import React, { useState } from "react";
import datas from "./data";

const Accordion = () => {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showAccordion, setShowAccordion] = useState(0);

  function handleClick(index) {
    setShow(!expand);
    setExpand(!expand);
    setShowAccordion(index);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center bg-lime-200 mb-2">Accordion</h1>
      <div className="flex flex-col gap-3 w-96">
        {datas.map((data) => {
          return (
            <div key={data.id} className="flex flex-col gap-1 bg-green-200 rounded-md p-2">
              <div onClick={() => handleClick(data.id)} className="flex justify-between cursor-pointer items-center">
                <h3 >{data.title} </h3>
                <span className="text-xl">+</span>
              </div>
              {(showAccordion === data.id) ? <p>{data.text}</p> : null}
              {/* {show ? <p>{data.text}</p> : null} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
