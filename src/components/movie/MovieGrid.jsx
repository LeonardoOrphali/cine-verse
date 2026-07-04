import MovieGridView from "./MovieGridView"
import MovieCarousel from "./MovieCarousel"

function MovieGrid({ variant = "grid", ...props }) {

    switch (variant) {

        case "carousel":
            return <MovieCarousel {...props} />

        default:
            return <MovieGridView {...props} />
    }
}

export default MovieGrid