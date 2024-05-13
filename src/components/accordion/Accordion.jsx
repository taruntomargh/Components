import React, { useState } from "react";
import accordion from "./data";
import Button from "../button/Button"

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelector, setMultiSelector] = useState([]);
  const [expand, setExpand] = useState(false);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId){
    let cpyMultiSelector = [...multiSelector];
    let checkIndex = cpyMultiSelector.indexOf(currentId);

    if(checkIndex === -1){
      cpyMultiSelector.push(currentId);
    } else{
      cpyMultiSelector.splice(checkIndex, 1);
    }

    setMultiSelector(cpyMultiSelector);
  }

  function handleOpenAll() {
    setExpand(!expand);
  }


  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl text-center bg-green-200 mb-2">Accordion</h1>
      <div className="flex gap-2">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="text-md text-white bg-blue-800 rounded-md p-2">Enable Multi Selector</button>
        <div onClick={handleOpenAll}>
          <Button value={"Open All"} />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-96">
        {accordion && accordion.length ? (
          accordion.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col gap-1 bg-green-200 rounded-md p-2"
              >
                <div
                  onClick={enableMultiSelection ? () => handleMultiSelection(data.id) : () => handleSingleSelection(data.id)}
                  className="flex justify-between cursor-pointer items-center"
                >
                  <h3>{data.title} </h3>
                  <span className="text-xl">+</span>
                </div>
                {
                  enableMultiSelection ? multiSelector.indexOf(data.id) !== -1 && <p>{data.text}</p> : selected === data.id && <p>{data.text}</p>
                }
                {/* {(selected === data.id || multiSelector.indexOf(data.id) !== -1 || expand) ? <p>{data.text}</p> : null} */}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
