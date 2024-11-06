import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Phones from "../pages/Phones";
import Cards from "../components/Cards";
import PhoneDetails from "../pages/PhoneDetails";
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
        loader: () => fetch('../gadget.json'),
      },
      {
        path: "/phone",
        element: <Phones></Phones>,
        loader: () => fetch('../gadget.json'),
      },
      {
        path: "/phnoneDetails/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch('../gadget.json'),
      },

    ]
  },
]);

export default router