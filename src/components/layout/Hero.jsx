import fallbackImg from '../../assets/fallbackImg.png'

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Hero({ movie, children, isloading }) {
    return (
        <section 
            className="
                h-[95vh]
                w-full
                relative
                overflow-hidden
            "
        >
            <div
                className="
                    inset-0 
                    bg-linear-to-t 
                    from-black/80 
                    to-transparent 
                    flex 
                    items-center
                "
            >
                {isloading 
                    ?   <SkeletonTheme  
                                width="100%"
                                height="100%"
                                baseColor="#181818"
                                highlightColor="#292929"
                        >
                            <div 
                                className="
                                    h-[95vh]
                                    w-full
                                    relative
                                    overflow-hidden
                                "
                            >
                                <Skeleton />
                            </div>
                            <div 
                                className="
                                    h-28
                                    w-130
                                    gap-4
                                    left-40
                                    top-70
                                    absolute
                                    flex
                                    flex-col
                                "
                            >   
                                <Skeleton />
                                <div
                                    className="
                                        w-110
                                        h-5
                                        gap-4
                                    "
                                >
                                    <Skeleton count={4} />
                                    <Skeleton width="80px" /> 
                                </div>
                            </div>
                        </SkeletonTheme> 
                    :   <>
                            <img
                                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                                    alt={movie.title + " poster"}
                                    onError={(e) => (e.currentTarget.src = fallbackImg)}
                                    className="
                                        inset-0
                                        h-full
                                        w-full
                                        select-none
                                        object-cover
                                        -z-10
                                    " 
                                />
                                {children}
                        </>
                }

                
                <div 
                    className="
                        absolute 
                        bottom-0 
                        left-0 
                        h-32 
                        w-full
                        bg-linear-to-b 
                        from-transparent 
                        to-(--background)
                    " 
                />
            </div>
        </section>
    )
}

export default Hero