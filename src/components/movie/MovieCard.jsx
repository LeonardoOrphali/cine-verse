import { Link } from "react-router-dom"

import fallbackImg from '../../assets/fallbackImg.png'

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="
                relative
                w-56
                h-80
                duration-500
                group
                origin-top
                hover:absolute
                hover:scale-120
                hover:z-1
            ">
                <div className="
                    absolute
                    inset-0
                    transition-all
                    group-hover:-translate-y-6
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
                            duration-300
                            group-hover:rounded-b-none
                    "/>
                    <div className="
                        h-23
                        bg-(--surface)
                        rounded-b-lg
                        shadow-2xl
                        opacity-0
                        duration-500
                        group-hover:opacity-100
                        group-hover:visible
                    ">
                        <div className="p-4 flex justify-center flex-col">
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