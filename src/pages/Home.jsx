import { getPopularMovies, getTrendingMovies } from "../services/movieService"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MovieGrid from "../components/MovieGrid"

function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        async function trendingTransfer() {
            const allTrendingMovies = await getTrendingMovies()
            setTrendingMovies(allTrendingMovies)
        }
        async function popularTransfer() {
            const allPopularMovies = await getPopularMovies()
            setPopularMovies(allPopularMovies)
        }

        trendingTransfer()
        popularTransfer()
    },[])

    return (
        <div className="
            w-full
            h-full
            flex
            flex-col
            items-center
            justify-start
        ">
            <Header />

            <main className="
                container
                pb-80
                h-auto
                flex
                flex-col
                items-center
                justify-start
            ">
                <Hero movies={popularMovies}/>
                <div className="
                    w-420
                    mt-180
                ">
                    <MovieGrid movies={popularMovies} title={"Popular"} />
                    <MovieGrid movies={trendingMovies} title={"Do momento"}/>
                </div>
            </main>
        </div>
    )
}

export default Home