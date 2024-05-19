import React from "react";
import Button from "../button/Button"

const Alert = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1>Alert Component</h1>
      <div className="border-red-600 p-4 border-2 rounded-md w-72 h-24">
        <h1 className="text-red-600 font-bold text-2xl">Warning</h1>
        <p className="text-black text-xl ">This is not allowed.</p>
      </div>
      <div>
        <h3>Alert Dialog</h3>
        <Button value={"Show Dialog"} />

      </div>
    </div>
  );
};

export default Alert;
