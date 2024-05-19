import React from "react";
import Button from "../button/Button"
import { Link } from "react-router-dom";

const Navbar = ({title="Components"}) => {
  return (
    <div className="w-full bg-slate-200 p-1 flex justify-between border-b-2 border-black">
      <Link><h1 className="text-xl font-bold">{title}</h1></Link>
      <ul className="flex gap-2">
        <Link to={"/components"}><li>Components</li></Link>
      </ul>
      <Link to={"https://github.com/taruntomargh/Components"} target="_blank"><Button value={"Github"} /></Link>
    </div>
  );
};

export default Navbar;
