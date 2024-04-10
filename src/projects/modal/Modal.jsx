import React, { useState } from "react";

const ModalPopup = ({handleClose}) => {

  return (
    <div className="bg-violet-800 text-white rounded-md mt-4 flex flex-col w-96 h-96">
      <div className="flex justify-around h-1/5">
        <h1>Header</h1>
        <span onClick={handleClose} className="cursor-pointer">&times;</span>
      </div>
      <main className="bg-violet-400 h-3/5">Body</main>
      <footer className="h-1/5">Footer</footer>
    </div>
  );
};

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose(){
    setShowModal(false);
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Modal</h1>
      <div className="text-center mt-2 flex flex-col justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-gray-400 text-xl rounded-md p-2"
        >
          Open Modal
        </button>
        {showModal ? <ModalPopup handleClose={handleClose} /> : null}
      </div>
    </div>
  );
};

export default Modal;
