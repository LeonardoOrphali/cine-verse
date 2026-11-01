
function CastGrid({ movie }) {
    return (
        <div 
            className="
                container
            "
        >
            <h2 
                className="
                    text-3xl sm:text-4xl
                    mb-3
                "
            >
                Elenco
            </h2>
            <hr 
                className="
                    mb-10
                    border-(--border)
                "
            />
            <div
                className="
                    grid
                    grid-cols-2 gap-x-4 gap-y-8 items-start sm:grid-cols-3 xl:grid-cols-5
                "
            >
                {movie.cast.slice(0,5).map((actor) => (
                    <div 
                        key={actor.id}
                        className="
                            flex
                            flex-col min-w-0 text-center wrap-anywhere
                            items-center
                        "
                    >
                            <img 
                                src={"https://image.tmdb.org/t/p/original" + actor.profile_path}
                                alt={"Foto de ator" + actor.name}
                                className="
                                    w-full max-w-36 aspect-square
                                    rounded-full
                                    object-cover
                                    border
                                    border-white
                                " 
                            />
                            <h3>
                                {actor.name}
                            </h3>
                            <p 
                                className="
                                    text-(--secondary-text)
                                "
                            >
                                {actor.character}
                            </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CastGrid