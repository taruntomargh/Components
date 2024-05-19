import React from "react";

const Button = ({value}) => {
  return (
    <div>
      <button className="text-md text-white bg-blue-800 rounded-md p-1">
        {value}
      </button>
    </div>
  );
};

export default Button;
