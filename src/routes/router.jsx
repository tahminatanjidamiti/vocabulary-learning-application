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
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../components/ForgetPassword";
import UpdatedProfile from "../components/UpdatedProfile";


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
                        element: <PrivateRoute><LoadLesson></LoadLesson></PrivateRoute>,
                        loader: () => fetch('/vocabulary.json'),
                    },
                    {
                        path: "/start_learning/:id",
                        element: <PrivateRoute><SingleLesson></SingleLesson></PrivateRoute>,
                        loader: ({params}) => fetch('/vocabulary.json'),
                    },
                ]
            },
            {
                path: "/tutorials",
                element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>
            },
            {
                path: "/about_us",
                element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: "/my_profile",
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
            },
            {
                path: "/updated",
                element: <UpdatedProfile></UpdatedProfile>
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
                    {
                        path: "/auth/forget",
                        element: <ForgetPassword></ForgetPassword>
                    },
                ]
            },
        
        ]
    },
    
]);


export default router;