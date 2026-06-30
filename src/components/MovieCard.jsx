import { Link } from "react-router-dom"

import fallbackImg from "../assets/fallbackImg.png"

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`}>

        <div className="
                relative
                w-56
                h-80
                group
                z-10
            ">
            <div className="
                    absolute
                    inset-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-4
                    group-hover:scale-105
                ">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    onError={(e) => (e.currentTarget.src = fallbackImg)}
                    alt={movie.title}
                    className="
                        w-full
                        h-80
                        object-cover
                        rounded-lg
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:rounded-b-none
                    "/>
                <div className="
                        absolute
                        top-full
                        left-0
                        right-0
                        bg-(--surface)
                        rounded-b-lg
                        shadow-2xl
                        opacity-0
                        invisible
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:visible
                    ">
                    <div className="p-4">
                        <div className="
                            flex 
                            gap-2 
                            mb-3
                        ">

                        </div>
                        <h3 className="
                                mt-2
                                font-semibold
                                text-sm
                                line-clamp-2
                            ">
                            {movie.title}
                        </h3>
                        <p className="
                            text-green-400 
                            text-sm 
                            font-semibold
                        ">
                            ★ {movie.vote_average.toFixed(1)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
                </Link>
    )
}

export default MovieCard