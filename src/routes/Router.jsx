import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Menu from "../Components/Pages/Home/Menu/Menu/Menu";
import Order from "../Components/Pages/Order/Order/Order";
import LogIn from "../Components/Pages/LogIn/LogIn";
import SignUp from "../Components/Pages/SignUP/SignUp";

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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ],
  },
]);
