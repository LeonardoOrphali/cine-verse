import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getMovieDetails } from "../services/movieService"

import Loading from "../components/layout/Loading"

function MovieDetails() {
    const { id } = useParams()

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadMovie() {
            try {
                const movie = await getMovieDetails(id)

                setMovie(movie)
            } finally {
                setLoading(false)
            }

        }

        loadMovie()
    }, [id])

    if (loading) return <Loading />

    return (
        
        <>
            <h1>Detalhes</h1>
            <p>ID: {id}</p>
            <p>Nome: {movie.title}</p>
        </>
    )
}

export default MovieDetails