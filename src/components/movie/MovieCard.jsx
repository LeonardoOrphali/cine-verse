import { Link } from "react-router-dom"

import fallbackImg from '../../assets/fallbackImg.png'
import { TiStarFullOutline } from "react-icons/ti";

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function MovieCard({ movie, loading }) {
    if (loading) {
        return (
            <div
                className="
                    w-56
                    h-80
                    rounded-md
                    overflow-hidden
                "
            >
                <Skeleton 
                    width="100%"
                    height="100%"
                    baseColor="#181818"
                    highlightColor="#292929"
                />
            </div>
        )
    }

    return (
        <Link to={`/movie/${movie.id}`} viewTransition> 
            <div 
                className="
                    w-56
                    h-80
                    duration-500
                    select-none
                    relative
                    group
                    origin-top
                    hover:scale-120
                    hover:z-2
                "
            >
                <div 
                    className="
                        absolute
                        inset-0
                        transition-all
                        group-hover:-translate-y-6
                    "
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        onError={(e) => (e.currentTarget.src = fallbackImg)}
                        alt={movie.title}
                        loading="lazy"
                        className="
                            w-full
                            h-80
                            object-cover
                            rounded-lg
                            shadow-lg
                            duration-300
                            group-hover:rounded-b-none
                        "
                    />
                    <div 
                        className="
                            h-23
                            bg-(--surface)
                            rounded-b-lg
                            shadow-2xl
                            opacity-0
                            duration-500
                            group-hover:opacity-100
                            group-hover:visible
                        "
                    >
                        <div 
                            className="
                                p-4 
                                gap-4
                                flex 
                                justify-center 
                                flex-col
                            "
                        >
                            <h3 
                                className="  
                                    line-clamp-1
                                    font-semibold
                                    text-sm
                                "
                            >
                                {movie.title}
                            </h3>
                            <div 
                                className="
                                    gap-1
                                    flex
                                    flex-row
                                    items-center
                                    justify-end
                                    text-(--rating)
                                "
                            >
                                <TiStarFullOutline />
                                <p 
                                    className="
                                        text-sm 
                                        font-semibold
                                    "
                                >
                                    {movie.vote_average.toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>  
    )
}

export default MovieCard