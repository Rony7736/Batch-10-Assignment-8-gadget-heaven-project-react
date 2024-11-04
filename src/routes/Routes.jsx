import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Phones from "../pages/Phones";
import Cards from "../components/Cards";
// import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <p><Error></Error></p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch('../gadget.json'),
          },
          {
            path: "/category/:name",
            element: <Cards></Cards>,
            loader: () => fetch('../gadget.json'),
          }
        ]
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/phone",
        element: <Phones></Phones>,
      },

    ]
  },
]);

export default router