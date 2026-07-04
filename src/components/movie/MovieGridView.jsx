import MovieCard from "./MovieCard"

function MovieGridView({ movies, title }) {
    return(
        <div className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
        ">
            <div className="
                mt-25
            ">
                <h1 className="
                    flex 
                    items-start 
                    w-full
                    mb-8
                ">
                    {title}
                </h1>
                <div className="
                    grid
                    grid-cols-7
                    gap-5
                ">
                    {movies.map((movie) => (
                        <div key={movie.id} className="
                            mb-5
                        ">
                            <MovieCard  movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieGridView