import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { Accordion, ImageSlider, QRCodeGenerator, StarRating, TicTacToe } from "../projects";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/accordion',
          element: <Accordion />
        },
        {
          path: '/image-slider',
          element: <ImageSlider />
        },
        {
          path: '/star-rating',
          element: <StarRating />
        },
        {
          path: '/tic-tac-toe',
          element: <TicTacToe />
        },
        {
          path: '/qr-code-generator',
          element: <QRCodeGenerator />
        },
      ]
    }
  ]);

  export default router;