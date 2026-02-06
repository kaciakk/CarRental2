import { createBrowserRouter } from "react-router";
import App from "./App";
import CarsPage from "./pages/cars/ui/CarsPage";
import HomePage from "./pages/home/ui/HomePage";
import CarsDetailsPage from "./pages/cars/ui/CarsDetailsPage";
import AdminCarsPage from "./pages/admin/cars/AdminCarsPage";
import AdminUsersPage from "./pages/admin/users/AdminUsersPage";
import AdminBookingPage from "./pages/admin/bookings/AdminBookingsPage";
import LoginPage from "./pages/auth/login/LoginPage";

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
      {
        path: "cars/:id",
        Component: CarsDetailsPage,
      },
      {
        path: "admin/cars",
        Component: AdminCarsPage,
      },
      {
        path: "admin/users",
        Component: AdminUsersPage,
      },
      {
        path: "admin/booking",
        Component: AdminBookingPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
    ],
  },
]);
