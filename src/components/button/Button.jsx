import React from "react";

const Button = ({value}) => {
  return (
    <div>
      <button className="text-md text-white bg-blue-800 rounded-md p-2">
        {value}
      </button>
    </div>
  );
};

export default Button;
