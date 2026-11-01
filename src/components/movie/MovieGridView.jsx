import MovieCard from "./MovieCard"

function MovieGridView({ movies, title, isloading, onFavoriteRemove }) {
    const skeletons = Array.from({ length: 20 })

    return(
        <div 
            className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
            "
        >
            <div 
                className="
                    mt-36
                    w-full
                    min-w-0
                    px-4
                    sm:mt-25
                    sm:px-8
                    lg:px-14
                "
            >
                <h1 
                    className="
                        flex 
                        items-start 
                        w-full
                        mb-8
                    "
                >
                    {title}
                </h1>
                <div 
                    className="
                        grid
                        auto-rows-fr
                        grid-cols-2
                        gap-x-3
                        gap-y-11
                        sm:grid-cols-3
                        sm:gap-x-5
                        sm:gap-y-11
                        md:grid-cols-4
                        lg:grid-cols-5
                        xl:grid-cols-6
                        2xl:grid-cols-7
                    "
                >
                    {isloading
                        ?   skeletons.map((_, index) => (
                                <MovieCard
                                    key={index}
                                    loading
                                />
                            ))
                        :   <>
                                {movies.map((movie) => (
                                    <div 
                                        key={movie.id} 
                                        className="
                                            min-w-0
                                        "
                                    >
                                        <MovieCard movie={movie} onFavoriteRemove={onFavoriteRemove} />
                                    </div>
                                ))}
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieGridView
