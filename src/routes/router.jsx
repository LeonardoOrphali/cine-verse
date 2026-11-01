import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import Search from "../pages/SearchedMovies"
import MovieDetails from "../pages/MovieDetails"
import Favorites from "../pages/Favorites"

const router = createBrowserRouter([
    {
        element:<App />,
        children:[
            {
                path: "/favoritos",
                element: <Favorites />
            },
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
