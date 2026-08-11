import { getPopularMovies, getTrendingMovies } from "../services/movieService"
import { useEffect, useState } from "react"

import Hero from "../components/layout/Hero"
import MovieGrid from "../components/movie/MovieGrid"
import Loading from "../components/layout/Loading"

function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadHomeData() {
            try {
                const [popular, trending] = await Promise.all([
                    getPopularMovies(),
                    getTrendingMovies()
                ])

                setPopularMovies(popular)
                setTrendingMovies(trending)
            } finally {
                setLoading(false)
            }
        }

        loadHomeData()
    }, [])

    const heroMovie = popularMovies?.[0]
    if (!heroMovie) return null

    if (loading) return <Loading />

    return (
        <main
            className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-start 
            "
        >
            <Hero movie={heroMovie}>
                <div 
                    className="
                        left-40
                        top-70
                        absolute
                        flex
                        flex-col
                    "
                >
                    <h1
                        className="
                            text-white 
                            text-4xl 
                            font-bold
                        "
                    >
                        {heroMovie.title}
                    </h1>
                    <p
                        className="
                            w-[80%]
                            text-white/70 
                            mt-2 
                            max-w-xl
                        "
                    >
                        {heroMovie.overview}
                    </p>
                </div>
            </Hero>
            <section
                className="
                    container
                    pb-80
                    h-auto
                    flex
                    flex-col
                    items-start
                    justify-start
                "
            >         
                <div
                    className="
                        w-full
                    "
                >
                    <MovieGrid 
                        movies={popularMovies} 
                        title={"Popular"} 
                        variant={"carousel"}
                    />
                    <MovieGrid 
                        movies={trendingMovies} 
                        title={"Do momento"}
                        variant={"carousel"} 
                    />
                </div>
            </section>
        </main>
    )
}

export default Home