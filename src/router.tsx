import { createBrowserRouter } from "react-router";
import App from "./App";
import CarsPage from "./pages/cars/ui/CarsPage";
import HomePage from "./pages/home/ui/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "cars",
        Component: CarsPage,
      },
    ],
  },
]);
