import { getPopularMovies, getTrendingMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from "../services/movieService"
import { Link } from "react-router-dom"

import Hero from "../components/layout/Hero"
import MovieSection, { MovieSectionContent } from "../components/movie/MovieSection"
import GenreSection from "../components/movie/GenreSection"
import useMovieResource from "../hooks/useMovieResource"

function Home() {
    const popular = useMovieResource(getPopularMovies)
    const loading = popular.status === 'loading'
    const heroMovie = popular.data[0]

    return (
        <main
            className={`
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-start
                ${!heroMovie && !loading ? 'pt-36 sm:pt-24' : ''}
            `}
        >
            {(heroMovie || loading) && <Hero
                className="home-hero"
                movie={heroMovie}
                isloading={loading}
            >
                {heroMovie && (
                    <div 
                        className="
                            w-full
                            min-w-0
                            px-4
                            self-end
                            pt-32
                            pb-8
                            sm:self-auto
                            sm:py-36
                            sm:px-14
                            lg:px-30
                            xl:px-40
                            lg:pt-70
                            lg:pb-32
                            flex
                            flex-col
                        "
                    >
                        <h1
                            className="
                                text-white 
                                text-2xl
                                leading-7
                                line-clamp-2
                                sm:line-clamp-none
                                sm:leading-10
                                sm:text-4xl
                                wrap-anywhere
                                font-bold
                            "
                        >
                            {heroMovie.title}
                        </h1>
                        <p
                            className="
                                w-full
                                lg:w-[80%]
                                text-white/70 
                                mt-2 
                                max-w-xl
                                lg:max-w-[29rem]
                                text-sm
                                leading-5
                                line-clamp-2
                                sm:text-base
                                sm:leading-6
                                sm:line-clamp-4
                            "
                        >
                            {heroMovie.overview}
                        </p>
                        <Link to={`/movie/${heroMovie.id}`}
                            className="
                                w-20
                                mt-2
                                duration-200
                                hover:scale-x-110
                            "
                        >
                            Ver mais
                        </Link>
                    </div>
                )}
            </Hero>}
            <section
                className="
                    pb-12
                    lg:pb-30
                    w-full
                    h-auto
                    flex
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                "
            >         
                    <MovieSectionContent title="Popular" resource={popular} />
                    <MovieSection title="Em alta" loadMovies={getTrendingMovies} />
                    <MovieSection title="Em cartaz" loadMovies={getNowPlayingMovies} />
                    <MovieSection title="Em breve" loadMovies={getUpcomingMovies} />
                    <MovieSection title="Mais bem avaliados" loadMovies={getTopRatedMovies} />
                    <GenreSection />
            </section>
        </main>
    )
}

export default Home
