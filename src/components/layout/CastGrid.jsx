
function CastGrid({ movie }) {
    return (
        <div 
            className="
                container
            "
        >
            <h2 
                className="
                    text-4xl
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
                    grid-cols-5
                    items-center
                "
            >
                {movie.cast.slice(0,5).map((actor) => (
                    <div 
                        key={actor.id}
                        className="
                            flex
                            flex-col
                            items-center
                        "
                    >
                            <img 
                                src={"https://image.tmdb.org/t/p/original" + actor.profile_path}
                                alt={"Foto de ator" + actor.name}
                                className="
                                    size-36
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