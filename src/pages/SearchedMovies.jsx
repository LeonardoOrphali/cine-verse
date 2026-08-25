import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

import MovieGrid from "../components/movie/MovieGrid"
import NotFound from "../components/layout/NotFound"

import { searchMovies } from "../services/movieService"

function Search () {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!query) return
        

        async function loadMovies() {
            try {
                const result = await searchMovies(query)

                setMovies(result)

                if (result.length === 0) {
                    setStatus("empty")
                }

            } catch (err) {
                console.log(err)
                setStatus("error")
            } finally {
                setLoading(false)
            }
        }

        loadMovies()
    }, [query])
    

    if (status === "empty") {
        return <NotFound />
    }

    if (status === "error") {
        return <Error />
    }

    return (
        <main>
            <MovieGrid 
                movies={movies}
                variant={"grid"}
                isloading={loading}
                title={
                    <>
                        <span className="text-(--secondary-text)">
                            Resultados para &nbsp;
                        </span>
                        <span className="text-(--main-text)">
                            {query}
                        </span>
                    </>
                }
            />
        </main>
    )
}

export default Search