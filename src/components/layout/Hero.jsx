import fallbackImg from '../../assets/fallbackImg.png'

function Hero({ movies }) {
    const movie = movies?.[2]

    if (!movie) return null

    return (
        <div className="
            h-full
            w-full
            absolute
            -z-10
        ">
            <img
                src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                alt={movie.title + " poster"}
                onError={(e) => (e.currentTarget.src = fallbackImg)}
                className="
                    h-full
                    w-full
                    object-cover
                " />
            <div className="
                absolute 
                inset-0 
                bg-linear-to-t 
                from-black/80 
                to-transparent 
                flex 
                items-center
                pl-30
            ">
                <div>
                    <h1 className="
                        text-white 
                        text-4xl 
                        font-bold
                    ">
                        {movie.title}
                    </h1>
                    <p className="
                        w-[80%]
                        text-white/70 
                        mt-2 
                        max-w-xl
                    ">
                        {movie.overview}
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-32 
                bg-linear-to-b 
                from-transparent 
                to-(--background)
            " />
        </div>
    )
}

export default Hero