import { getPopularMovies, getTrendingMovies } from "../services/movieService"
import { useEffect, useState } from "react"

import Header from "../components/layout/Header"
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

    if (loading) return <Loading />

    return (
        <div 
            className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-start
            "
        >
            <Header />

            <main 
                className="
                    container
                    pb-80
                    h-auto
                    flex
                    flex-col
                    items-center
                    justify-start
                "
            >
                <Hero movies={popularMovies} />
                <div 
                    className="
                        w-[110%]
                        mt-225
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
            </main>
        </div>
    )
}

export default Home