import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>,

            },
        ]
    },
    {
        path: "/start_learning",
        element: <h1>Start-learning</h1>
    },
    {
        path: "/tutorials",
        element: <h1>Tutorials</h1>
    },
    {
        path: "/about_us",
        element: <h1>About_us</h1>
    },
    {
        path: "/my_profile",
        element: <h1>My_profile</h1>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },

]);


export default router;