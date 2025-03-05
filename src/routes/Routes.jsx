import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllCard from "../pages/AllCard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyArtCard from "../pages/MyArtCard";
import NotFound from "../pages/Shared/NotFound";
import PrivateRoute from "./PrivateRoute";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/allCard',
                element:<AllCard></AllCard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/myCardList',
                element:<PrivateRoute><MyArtCard></MyArtCard></PrivateRoute>
            },
            {

            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
                

        ]

    }
])


export default routes;