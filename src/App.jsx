import React from "react";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={"/"}>
        <Navbar />
      </Link>
      <main className="flex">
        <div className="w-1/4 h-full bg-sky-400 p-1">
          <ul className="flex flex-col gap-2">
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/accordion"}>Accordion</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/bmi-calculator"}>BMI Calculator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/currency-convertor"}>Currency Convertor</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/custom-hooks"}>Custom Hooks</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/custom-progress-bar"}>Custom Progress Bar</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/debounce-api-call"}>Debounce API Call</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/digital-clock"}>Digital Clock</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/drag-and-drop"}>Drag and Drop</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/file-explorer"}>File Explorer</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/filter"}>Filter</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/form-validation"}>Form Validation</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/github-profile-finder"}>Github Profile Finder</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/image-slider"}>Image Slider</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/load-more-button"}>Load More Button</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/modal"}>Modal</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/movie-app"}>Movie App</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/nested-comments"}>Nested Comments</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/pagination"}>Pagination</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/pdf-viewer"}>PDF Maker</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/random-color-generator"}>Random Color Generator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/ripple-effect"}>Ripple Effect</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/scroll-indicator"}>Scroll Indicator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/scroll-to-particular-section"}>Scroll to particular section</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/scroll-top-bottom"}>Scroll Top Bottom</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/search-autocomplete"}>Search Autocomplete</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/sort"}>Sort</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/star-rating"}>Star Rating</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/step-progress-bar"}>Step Progress Bar</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/tabs"}>Tabs</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/theme-switcher"}>Theme Switcher</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/tic-tac-toe"}>Tic Tac Toe</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/timer"}>Timer</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/tip-calculator"}>Tip Calculator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/tooltip"}>Tooltip</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/tree-view"}>Tree View</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/qr-code-generator"}>QRCode Generator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/quiz-app"}>Quiz App</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/quote-generator"}>Quote Generator</Link>
            </li>
            <li className="bg-slate-300 hover:bg-white rounded-md p-2 text-center">
              <Link to={"/weather-app"}>Weather</Link>
            </li>
          </ul>
        </div>
        <div className="w-9/12 h-screen ">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default App;
