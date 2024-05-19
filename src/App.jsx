import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar title={"Components"} options={{}} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
