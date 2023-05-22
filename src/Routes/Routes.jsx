import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/SignUp";
import Addtoy from "./Shared/Addtoy";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[ 
                {
                        path:"/",
                        element:<Home></Home>
                },
                {
                       path:'login',
                       element:<Login></Login>

                },
                {
                        path:'signup',
                        element:<Signup></Signup>
                },
                {
                        path:'addtoy',
                        element:<Addtoy></Addtoy>
                }
          ]
        },
      ]);

  export default router;    