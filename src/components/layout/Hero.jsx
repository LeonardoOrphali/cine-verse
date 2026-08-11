import fallbackImg from '../../assets/fallbackImg.png'

function Hero({ movie, children }) {

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
                <img
                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                    alt={movie.title + " poster"}
                    onError={(e) => (e.currentTarget.src = fallbackImg)}
                    className="
                        inset-0
                        h-full
                        w-full
                        object-cover
                        -z-10
                    " 
                />
                {children}
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