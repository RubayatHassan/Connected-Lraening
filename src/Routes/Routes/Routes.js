import { createBrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Layout/Main";
import About from "../../Pages/About/About/About";
import Course from "../../Pages/Course/Course/Course";
import ContactUs from "../../Pages/ContactUs/ContactUs/ContactUs";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;