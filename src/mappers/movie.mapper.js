
export function mapMovieDetails(data) {
    return {
        title: data.title,
        overview: data.overview,
        poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
        average: data.vote_average,
        release: data.release_date,
        budget: data.budget,
        genres: data.genres,
    }
}