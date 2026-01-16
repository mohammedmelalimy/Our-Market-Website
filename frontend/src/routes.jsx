import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layouts/MainLayout/Mainlayout";
import About from "./pages/mainpages/About";
import Contact from "./pages/mainpages/Contact";
import Features from "./pages/mainpages/Features";
import Home from "./pages/mainpages/Home/Home";
// import Signin from "./pages/mainpages/Signin";
import Authlayout from "./layouts/Authlayout/Authlayout";
import Error from "./pages/mainpages/Error";
import Signup from "./pages/mainpages/Signup";
import Details from "./pages/user/Details";
import Homeuser from "./pages/user/Homeuser";
import Profile from "./pages/user/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout/>,
        errorElement:<Error />,
        children: [
            { index: true,
              element: <Home/>
            },
            {
                path:'about-us',
                element:<About/>
            },
            {
                path:'features',
                element:<Features/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            // {
            //     path:'signin',
            //     element:<Signin/>
            // },
            {
                path:'signup',
                element:<Signup/>
            }
          ]
    },
    {
        path:'user',
        element:<Authlayout/>,
        errorElement:<Error />,
        children:[
            { index: true,
                element: <Homeuser/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path:'details',
                element:<Details/>
            }
        ]

    }
])

export default router
