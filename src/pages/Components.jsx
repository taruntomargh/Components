import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Components = () => {
  return (
    <main className="flex">
        <div className="w-1/5 h-full p-1">
          <ul className="flex flex-col gap-1 border-r-2 border-black">
            <li className=" hover:underline rounded-md text-center">
              <Link to={"/components/accordion"}>Accordion</Link>
            </li>
             <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/alert"}>Alert</Link>
            </li>            
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/custom-hooks"}>Custom Hooks</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/custom-progress-bar"}>Custom Progress Bar</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/digital-clock"}>Digital Clock</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/drag-and-drop"}>Drag and Drop</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/components/file-explorer"}>File Explorer</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/image-slider"}>Image Slider</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/load-more-button"}>Load More Button</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/modal"}>Modal</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/pagination"}>Pagination</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/star-rating"}>Star Rating</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/step-progress-bar"}>Step Progress Bar</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/tabs"}>Tabs</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/theme-switcher"}>Theme Switcher</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/timer"}>Timer</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/tooltip"}>Tooltip</Link>
            </li>
            <li className=" hover:underline rounded-md p-2 text-center">
              <Link to={"/components/tree-view"}>Tree View</Link>
            </li>
          </ul>
        </div>
        <div className="w-4/5 h-screen ">
          <Outlet />
        </div>
      </main>
  )
}

export default Components