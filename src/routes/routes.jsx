import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import {
  Accordion,
  Alert,
  CustomHooks,
  CustomProgressBar,
  DigitalClock,
  DragAndDrop,
  FileExplorer,
  ImageSlider,
  LoadMoreButton,
  Modal,
  Pagination,
  StarRating,
  StepProgressBar,
  Tabs,
  ThemeSwitcher,
  Timer,
  ToolTip,
  TreeView,
} from "../components";
import Home from "../pages/Home";
import Components from "../pages/Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/components",
        element: <Components />,
        children: [
            {
              path: "/components/accordion",
              element: <Accordion />
            },          
            {
              path: "/components/alert",
              element: <Alert />,
            },
            {
              path: "/components/custom-hooks",
              element: <CustomHooks />,
            },
            {
              path: "/components/custom-progress-bar",
              element: <CustomProgressBar />,
            },
            {
              path: "/components/digital-clock",
              element: <DigitalClock />,
            },
            {
              path: "/components/drag-and-drop",
              element: <DragAndDrop />,
            },
            {
              path: "/components/file-explorer",
              element: <FileExplorer />,
            },
            {
              path: "/components/image-slider",
              element: <ImageSlider />,
            },
            {
              path: "/components/load-more-button",
              element: <LoadMoreButton />,
            },
            {
              path: "/components/modal",
              element: <Modal />,
            },
            {
              path: "/components/pagination",
              element: <Pagination />,
            },
            {
              path: "/components/star-rating",
              element: <StarRating />,
            },
            {
              path: "/components/step-progress-bar",
              element: <StepProgressBar />,
            },
            {
              path: "/components/tabs",
              element: <Tabs />,
            },
            {
              path: "/components/theme-switcher",
              element: <ThemeSwitcher />,
            },
            {
              path: "/components/timer",
              element: <Timer />,
            },
            {
              path: "/components/tooltip",
              element: <ToolTip />,
            },
            {
              path: "/components/tree-view",
              element: <TreeView />,
            },
        ],
      },
    ]
  },
  
]);

export default router;
