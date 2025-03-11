import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllCard from "../pages/AllCard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyArtCard from "../pages/MyArtCard";
import NotFound from "../pages/Shared/NotFound";
import PrivateRoute from "./PrivateRoute";
import AddArtCard from "../pages/AddArtCard";
import ViewDetails from "../pages/ViewDetails";
import UpdateCard from "../pages/UpdateCard";
import About from "../pages/About";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/juteCrafts')
            },
            {
                path: '/allCard',
                element: <AllCard></AllCard>,
                loader: () => fetch('http://localhost:5000/juteCrafts')

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myCardList',
                element: <PrivateRoute><MyArtCard /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/juteCrafts')

            },
            {
                path: '/addArtCard',
                element: <PrivateRoute><AddArtCard /></PrivateRoute>
            },

            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/juteCrafts/${params.id}`)
            },
            {
                path: '/updateCard/:id',
                element: <UpdateCard></UpdateCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/juteCrafts/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }


        ]

    }
])


export default routes;