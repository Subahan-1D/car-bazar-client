import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Login/ErrorPage";
import Registration from "../pages/Login/Registration";
import Secret from "../shared/Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
