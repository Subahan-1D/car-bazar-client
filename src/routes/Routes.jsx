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
import Dashboard from "../layout/Dashboard/Dashboard";
import Cart from "../pages/DashboardPage/Cart";
import UserHome from "../pages/DashboardPage/UserHome";
import Review from "../pages/DashboardPage/Review";
import MyBooking from "../pages/DashboardPage/MyBooking";
import Admin from "../pages/DashboardPage/DashboardPageAdmin/Admin";
import AddService from "../pages/DashboardPage/DashboardPageAdmin/AddService";
import ManageService from "../pages/DashboardPage/DashboardPageAdmin/ManageService";
import AllUser from "../pages/DashboardPage/DashboardPageAdmin/AllUser";
import AdminRoute from "./AdminRoute";
import UpdateService from "../pages/DashboardPage/UpdateService/UpdateService";

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
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "booking",
        element: <MyBooking></MyBooking>,
      },
      // admin route
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Admin></Admin>
          </AdminRoute>
        ),
      },
      {
        path: "addService",
        element: (
          <AdminRoute>
            <AddService></AddService>
          </AdminRoute>
        ),
      },
      {
        path: "manageService",
        element: (
          <AdminRoute>
            <ManageService></ManageService>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            {" "}
            <UpdateService></UpdateService>
          </AdminRoute>
        ),
        loader: ({ params }) => {
          console.log("Loader params:", params);
          return fetch(`http://localhost:8000/service/${params.id}`);
        },
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);
