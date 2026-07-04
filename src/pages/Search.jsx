import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

import MovieGrid from "../components/movie/MovieGrid"
import Loading from "../components/layout/Loading"
import NotFound from "../components/layout/NotFound"

import { searchMovies } from "../services/movieService"

function Search () {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!query) return
  
        async function loadMovies() {
            try{
                const result = await searchMovies(query)
                setMovies(result)
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [query])

    if (movies.length < 1) return <NotFound />

    if (loading) return <Loading />

    return (
        <>
            <MovieGrid 
                movies={movies}
                variant={"grid"}
                title={
                    <>
                        <span className="text-(--secondary-text)">Resultados para &nbsp;</span>
                        <span className="text-(--main-text)">{query}</span>
                    </>
                }
            />
        </>
    )
}

export default Search