import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getMovieDetails } from "../services/movieService"

function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {

        async function loadMovie() {
            const movie = await getMovieDetails(id)

            setMovie(movie)
        }

        loadMovie()
    },[id])

    if (!movie) {
        return <p>Carregando...</p>
    }
    
    return (
        
        <>
            <h1>Detalhes</h1>
            <p>ID: {id}</p>
            <p>Nome: {movie.title}</p>
        </>
    )
}

export default MovieDetails