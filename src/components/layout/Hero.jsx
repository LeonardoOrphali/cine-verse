import fallbackImg from '../../assets/fallbackImg.png'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Hero({ movie, children, isloading, className = "" }) {
    return (
        <section className={`hero w-full isolate grid relative ${className}`}>
            <div className="hero-backdrop min-w-0 min-h-0">
                {isloading ? (
                    <SkeletonTheme baseColor="#181818" highlightColor="#292929">
                        <Skeleton height="100%" containerClassName="block h-full" />
                    </SkeletonTheme>
                ) : (
                    <img
                        src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                        alt={movie.title + " poster"}
                        onError={(e) => (e.currentTarget.src = fallbackImg)}
                        className="w-full h-full object-cover select-none"
                    />
                )}
            </div>
            <div className="hero-shade bg-linear-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="hero-content min-w-0 grid">
                {isloading ? (
                    <SkeletonTheme baseColor="#181818" highlightColor="#292929">
                        <div className="hero-loading-copy w-full px-4 py-36 sm:px-14 lg:px-30 xl:px-40 lg:pt-70 lg:pb-32">
                            <div className="w-full max-w-130">
                                <Skeleton height={40} />
                                <div className="w-full max-w-110 mt-4">
                                    <Skeleton count={4} />
                                    <Skeleton width={80} />
                                </div>
                            </div>
                        </div>
                    </SkeletonTheme>
                ) : children}
            </div>
            <div className="hero-fade h-32 self-end bg-linear-to-b from-transparent to-(--background) pointer-events-none" />
        </section>
    )
}

export default Hero
