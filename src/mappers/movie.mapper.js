
export function mapMovieDetails(data) {
    const director = data.credits.crew.find(
        person => person.job === "Director"
    )

    const cinematographer = data.credits.crew.find(
        person => person.job === "Director of photography"
    )

    const writers = data.credits.crew.filter(
        person => person.department === "Writing"
    )

    return {
        title: data.title,
        overview: data.overview,

        backdrop_path: data.backdrop_path,

        release: data.release_date?.split("-")[0],
        runtime: data.runtime,
        genres: data.genres,
        average: data.vote_average,

        budget: data.budget,
        revenue: data.revenue,

        director: director.name,
        writers,
        cinematographer,

        cast: data.credits.cast,
    }
}