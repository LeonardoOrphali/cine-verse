import { getPopularMovies, getTrendingMovies, searchMovies, getMovieDetails } from "../services/movieService"

function Home() {

    // TESTES
    async function getTests  () {
        console.log( 
            await getPopularMovies(),
            await getTrendingMovies(),
            await searchMovies('batman'),
            await getMovieDetails(),
        )

    }
    getTests()

    return (
        <>
            <h1>Hello, World!</h1>
        </>
    )
}

export default Home