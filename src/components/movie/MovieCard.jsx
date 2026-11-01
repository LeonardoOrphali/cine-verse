import { Link } from "react-router-dom"
import FavoriteButton from './FavoriteButton'

import fallbackImg from '../../assets/fallbackImg.png'
import { TiStarFullOutline } from "react-icons/ti";

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function MovieCard({ movie, loading, onFavoriteRemove }) {
    if (loading) {
        return (
            <div
                className="
                    movie-card-skeleton
                    w-full
                    rounded-md
                    overflow-hidden
                "
            >
                <div className="movie-card-poster-frame aspect-[7/10]">
                    <Skeleton
                        width="100%"
                        height="100%"
                        baseColor="#181818"
                        highlightColor="#292929"
                    />
                </div>
                <div className="movie-card-skeleton-info min-h-32 p-4 bg-(--surface)">
                    <Skeleton count={2} baseColor="#181818" highlightColor="#292929" />
                </div>
            </div>
        )
    }

    return (
        <div className="movie-card-link block min-w-0 w-full">
            <div 
                className="
                    w-full
                    duration-500
                    select-none
                    relative
                    group
                    origin-top
                    movie-card
                    hover:z-2
                "
            >
                <div 
                    className="
                        movie-card-content
                        transition-all
                    "
                >
                    <Link to={`/movie/${movie.id}`} viewTransition className="movie-card-details-link flex h-full min-w-0 flex-col rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <div className="movie-card-poster-frame aspect-[7/10]">
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : fallbackImg}
                        onError={(e) => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src = fallbackImg
                        }}
                        alt={movie.title}
                        loading="lazy"
                        className="
                            w-full
                            h-full
                            object-cover
                            rounded-lg
                            shadow-lg
                            duration-300
                            movie-card-poster
                        "
                    />
                    </div>
                    <div 
                        className="
                            movie-card-info min-h-32
                            bg-(--surface)
                            rounded-b-lg
                            shadow-2xl
                            duration-500
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
                                    wrap-anywhere
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
                                    mt-auto
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
                    </Link>
                    <FavoriteButton movie={movie} onRemove={onFavoriteRemove} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
