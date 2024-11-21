import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
]);


export default router;