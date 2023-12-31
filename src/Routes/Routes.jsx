import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/SignUp";
import Addtoy from "./Shared/Addtoy";
import Alltoy from "../Home/Alltoy";
import Detailstoy from "../Home/Detailstoy";
import Blog from "./Shared/Blog";
import PrivateRoute from "./PrivatRoute";
import Mytoy from "../Mytoys/Mytoy";
import Updatetoy from "../Mytoys/Updatetoy";
import Notfound from "../Notfound";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement:<Notfound></Notfound>,
          children:[ 
                {
                        path:"/",
                        element:<Home></Home>
                },
                {
                        path:'alltoy',
                        element:<Alltoy></Alltoy>,
                        loader: () => fetch('https://doll-toy-server-a11.vercel.app/alltoys')
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
                },
                {
                        path:'details/:id',
                        element: <PrivateRoute><Detailstoy></Detailstoy></PrivateRoute>,
                        loader:({params}) => fetch(`https://doll-toy-server-a11.vercel.app/alltoys/${params.id}`)
                },
                {
                        path:'blog',
                        element:<Blog></Blog>
                },
                {
                        path:'mytoy',
                        element:<PrivateRoute><Mytoy></Mytoy></PrivateRoute>
                },
                {
                        path:'updatetoy/:id',
                        element:<Updatetoy></Updatetoy>,
                        loader: ({params}) => fetch(`https://doll-toy-server-a11.vercel.app/addtoys/${params.id}`)
                        
                }
          ]
        },
      ]);

  export default router;    