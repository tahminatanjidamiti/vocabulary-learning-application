import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Tutorials from "../components/Tutorials";
import StartLearning from "../components/StartLearning";
import AboutUs from "../components/AboutUs";
import MyProfile from "../components/MyProfile";
import LoadLesson from "../components/LoadLesson";
import SingleLesson from "../components/SingleLesson";


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
            {
                path: "/start_learning",
                element: <StartLearning></StartLearning>,
                children: [
                    {
                        path: "/start_learning/lessons",
                        element: <LoadLesson></LoadLesson>,
                        loader: () => fetch('/vocabulary.json'),
                    },
                    {
                        path: "/start_learning/:id",
                        element: <SingleLesson></SingleLesson>,
                        loader: () => fetch('/vocabulary.json'),
                    },
                ]
            },
            {
                path: "/tutorials",
                element: <Tutorials></Tutorials>
            },
            {
                path: "/about_us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/my_profile",
                element: <MyProfile></MyProfile>
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
        
        ]
    },
    
]);


export default router;