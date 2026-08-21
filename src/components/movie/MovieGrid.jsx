import MovieGridView from "./MovieGridView"
import MovieCarousel from "./MovieCarousel"

function MovieGrid({ variant, ...props }) {

    switch (variant) {

        case "carousel":
            return <MovieCarousel {...props} />
        case "grid":
            return <MovieGridView {...props} /> 
        default:
            return <MovieGridView {...props} />
    }
}

export default MovieGrid