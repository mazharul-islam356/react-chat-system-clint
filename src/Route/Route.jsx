import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path:'/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ]);