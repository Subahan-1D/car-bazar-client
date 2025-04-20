import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Service></Service>
      }
    ],
  },
]);
