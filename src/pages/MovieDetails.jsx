import { useParams } from "react-router-dom"
import { useCallback } from "react"
import useMovieResource from "../hooks/useMovieResource"
import RecommendationSection from "../components/movie/RecommendationSection"

import { getMovieDetails } from "../services/movieService"
import { TiStarFullOutline } from "react-icons/ti";

import Hero from "../components/layout/Hero"
import SideBar from "../components/movie/SideBar"
import CastGrid from "../components/movie/CastGrid"
import Loading from "../components/layout/Loading"

function MovieDetails() {
    const { id } = useParams()

    return <MovieDetailsContent key={id} id={id} />
}

function MovieDetailsContent({ id }) {
    const loadMovie = useCallback(signal => getMovieDetails(id, signal), [id])
    const resource = useMovieResource(loadMovie)
    if (resource.status === 'loading') return <Loading />
    if (resource.status === 'error') return (
        <main className="min-h-screen px-4 pt-40 text-center">
            <p role="status">Não foi possível carregar este filme.</p>
            <button type="button" onClick={resource.retry} className="mt-2 underline cursor-pointer">Tentar novamente</button>
        </main>
    )
    const movie = resource.data
    const heroMovie = movie

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
                <Hero movie={heroMovie}>
                    <div
                        className="
                            w-full min-w-0 self-end px-4 pt-36 pb-12 sm:px-8 lg:px-30 lg:pb-20
                        "
                    >
                        <h1
                            className="
                                text-3xl sm:text-5xl lg:text-6xl wrap-anywhere
                                font-bold
                                mb-6 lg:mb-10
                            "
                        >
                            {movie.title}
                        </h1>
                        <div
                            className="
                                flex-wrap
                                flex
                                items-center
                                gap-x-4 gap-y-3
                            "
                        >
                            <h2>
                                {movie.release}
                            </h2>
                            <span 
                                className="
                                    text-gray-500
                                "
                            >
                                &bull;
                            </span>
                            <h2 
                                className="
                                    text-(--secondary-text)
                                "
                            >
                                {movie.runtime}m
                            </h2>
                            <span 
                                className="
                                    text-gray-500
                                "
                            >
                                &bull;
                            </span>
                            {movie.genres.map((genre) => (
                                <div 
                                    className="
                                        px-2
                                        border  
                                        bg-(--background)  
                                        border-(--border)
                                    "
                                >
                                    <h2 
                                        key={genre.id}
                                        className="
                                            text-(--secondary-text)
                                        "    
                                    >
                                        {genre.name}
                                    </h2>
                                </div>
                            ))}
                            <span 
                                className="
                                    text-gray-500
                                "
                            >
                                &bull;
                            </span>
                            <div
                                className="
                                    gap-1
                                    flex 
                                    items-center 
                                    text-(--rating)
                                "
                            >
                                <TiStarFullOutline />
                                <h2>
                                    {movie.average.toFixed(1)}
                                </h2>
                            </div>
                        </div>
                    </div>
                </Hero>
                <section className="w-full min-w-0 px-4 sm:px-8 lg:px-30">
                    <div 
                        className="
                            gap-10 xl:gap-20 2xl:gap-30
                            w-full
                            grid
                            grid-cols-1 lg:grid-cols-3
                            
                        "
                    >
                        <div
                            className="
                                min-w-0 pt-8 lg:pt-20 lg:col-span-2 wrap-anywhere
                            "
                        >
                            <div
                                className="
                                    mb-12 lg:mb-20
                                    container
                                "
                            >
                                <h2 
                                    className="
                                        text-3xl sm:text-4xl
                                        mb-3
                                    "
                                >
                                    Sinopse
                                </h2>
                                <hr 
                                    className="
                                        mb-6 lg:mb-10
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
                <RecommendationSection key={id} movieId={id} />
            </main>
    )
}

export default MovieDetails
