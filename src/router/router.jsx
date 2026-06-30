import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import Search from "../pages/Search"
import MovieDetails from "../pages/MovieDetails"

const router = createBrowserRouter([
    {
        element:<App />,
        children:[
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/search",
                element: <Search />
            },

            {
                path: "/movie/:id",
                element: <MovieDetails />
            }
        ]
    }
])

export default router