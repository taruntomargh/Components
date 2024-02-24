import React from "react";
import Navbar from './components/Navbar'
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={'/'}><Navbar /></Link>
      <main className="flex">
        <div className="w-1/4 h-screen bg-sky-400">
          <ul>
            <li>
              <Link to={"/accordion"}>Accordion</Link>
            </li>
            <li>
              <Link to={"/image-slider"}>Image Slider</Link>
            </li>
            <li>
              <Link to={"/star-rating"}>Star Rating</Link>
            </li>
            <li>
              <Link to={"/tic-tac-toe"}>Tic Tac Toe</Link>
            </li>
            <li>
              <Link to={"/qr-code-generator"}>QRCode Generator</Link>
            </li>
          </ul>
        </div>
        <div className="w-9/12 h-screen bg-red-200">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default App;
