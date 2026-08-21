import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getMovieDetails } from "../services/movieService"

import Hero from "../components/layout/Hero"
import SideBar from "../components/layout/SideBar"
import CastGrid from "../components/layout/CastGrid"
import Loading from "../components/layout/Loading"

function MovieDetails() {
    const { id } = useParams()

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie() {
            try {
                const movies = await getMovieDetails(id)
                setMovie(movies)
            } finally {
                setLoading(false)
            }
        }
        loadMovie()
    }, [id])

    const heroMovie = movie
    
    if (loading) return <Loading />

    if (!heroMovie) return null

    let overview = movie.overview == "" ? "Descrição não encontrada." : movie.overview

    return (
            <main 
                className="
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center 
                "
            >
                <Hero movie={heroMovie} />
                <section
                    className="
                        w-full
                        px-30
                    "
                >
                    <div
                        className="
                            absolute
                            bottom-20
                            left-30
                        "
                    >
                        <h1
                            className="
                                text-6xl
                                font-bold
                                mb-10
                            "
                        >
                            {movie.title}
                        </h1>
                        <div
                            className="
                                container
                                flex
                                gap-4
                            "
                        >
                            <h2>{movie.release}</h2>
                            <h2>{movie.runtime}m</h2>
                            {movie.genres.map((genre) => (
                                <h2 
                                    key={genre.id}
                                    className="
                                        text-(--secondary-text)
                                    "    
                                >
                                    {genre.name}
                                </h2>
                            ))}
                            <h2>* {movie.average.toFixed(1)}</h2>
                        </div>
                    </div>
                    <div 
                        className="
                            gap-30
                            w-full
                            grid
                            grid-cols-3
                            
                        "
                    >
                        <div
                            className="
                                pt-20
                                col-span-2
                            "
                        >
                            <div
                                className="
                                    container
                                    mb-20
                                "
                            >
                                <h2 
                                    className="
                                        text-4xl
                                        mb-3
                                    "
                                >
                                    Sinopse
                                </h2>
                                <hr 
                                    className="
                                        mb-10
                                        border-(--border)
                                    "
                                />
                                <p>
                                    {overview}
                                </p>
                            </div>
                            <CastGrid movie={movie} />
                        </div>
                        <SideBar movie={movie} />
                    </div>
                </section>
            </main>
    )
}

export default MovieDetails