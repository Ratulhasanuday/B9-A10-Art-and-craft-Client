import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllCard from "../pages/AllCard";
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
            }
        
        ]

    }
])


export default routes;