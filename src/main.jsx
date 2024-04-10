import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import GlobalState from "./projects/movie-app/context/GlobalState";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
    <RouterProvider router={router} />
    </GlobalState>
  </React.StrictMode>
);
