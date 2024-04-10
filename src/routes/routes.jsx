import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import {
  Accordion,
  BMICalculator,
  CurrencyConvertor,
  CustomHooks,
  CustomProgressBar,
  DebounceApiCall,
  DigitalClock,
  DragAndDrop,
  FileExplorer,
  Filter,
  FormValidation,
  GithubProfileFinder,
  ImageSlider,
  LoadMoreButton,
  Modal,
  MovieApp,
  NestedComments,
  PDFViewer,
  Pagination,
  QRCodeGenerator,
  QuizApp,
  QuoteGenerator,
  RandomColorGenerator,
  RippleEffect,
  ScrollIndicator,
  ScrollToParticularSection,
  ScrollTopBottom,
  SearchAutocomplete,
  Sort,
  StarRating,
  StepProgressBar,
  Tabs,
  ThemeSwitcher,
  TicTacToe,
  Timer,
  TipCalculator,
  ToolTip,
  TreeView,
  Weather,
} from "../projects";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/bmi-calculator",
        element: <BMICalculator />,
      },
      {
        path: "/currency-convertor",
        element: <CurrencyConvertor />,
      },
      {
        path: "/custom-hooks",
        element: <CustomHooks />,
      },
      {
        path: "/custom-progress-bar",
        element: <CustomProgressBar />,
      },
      {
        path: "/debounce-api-call",
        element: <DebounceApiCall />,
      },
      {
        path: "/digital-clock",
        element: <DigitalClock />,
      },
      {
        path: "/drag-and-drop",
        element: <DragAndDrop />,
      },
      {
        path: "/file-explorer",
        element: <FileExplorer />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/form-validation",
        element: <FormValidation />,
      },
      {
        path: "/github-profile-finder",
        element: <GithubProfileFinder />,
      },
      {
        path: "/image-slider",
        element: <ImageSlider />,
      },
      {
        path: "/load-more-button",
        element: <LoadMoreButton />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/movie-app",
        element: <MovieApp />,
      },
      {
        path: "/nested-comments",
        element: <NestedComments />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/pdf-viewer",
        element: <PDFViewer />,
      },
      {
        path: "/random-color-generator",
        element: <RandomColorGenerator />,
      },
      {
        path: "/ripple-effect",
        element: <RippleEffect />,
      },
      {
        path: "/scroll-indicator",
        element: <ScrollIndicator />,
      },
      {
        path: "/scroll-to-particular-section",
        element: <ScrollToParticularSection />,
      },
      {
        path: "/scroll-top-bottom",
        element: <ScrollTopBottom />,
      },
      {
        path: "/search-autocomplete",
        element: <SearchAutocomplete />,
      },
      {
        path: "/sort",
        element: <Sort />,
      },
      {
        path: "/star-rating",
        element: <StarRating />,
      },
      {
        path: "/step-progress-bar",
        element: <StepProgressBar />,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
      {
        path: "/theme-switcher",
        element: <ThemeSwitcher />,
      },
      {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/tip-calculator",
        element: <TipCalculator />,
      },
      {
        path: "/tooltip",
        element: <ToolTip />,
      },
      {
        path: "/tree-view",
        element: <TreeView />,
      },
      {
        path: "/qr-code-generator",
        element: <QRCodeGenerator />,
      },
      {
        path: "/quiz-app",
        element: <QuizApp />,
      },
      {
        path: "/quote-generator",
        element: <QuoteGenerator />,
      },
      {
        path: "/weather-app",
        element: <Weather />,
      },
    ],
  },
]);

export default router;
