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
    const [status, setStatus] = useState("loading")

    useEffect(() => {
        if (!query) return

        async function loadMovies() {
            setStatus("loading")

            try {
                const result = await searchMovies(query)

                setMovies(result)

                if (result.length === 0) {
                    setStatus("empty")
                } else {
                    setStatus("success")
                }

            } catch (err) {
                console.log(err)
                setStatus("error")
            }
        }

        loadMovies()
    }, [query])

    if (status === "loading") {
        return <Loading />
    }

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