import { useCallback } from 'react'
import { getMovieRecommendations } from '../../services/movieService'
import { MovieSectionContent } from './MovieSection'
import useMovieResource from '../../hooks/useMovieResource'

export default function RecommendationSection({ movieId }) {
    const loadMovies = useCallback(signal => getMovieRecommendations(movieId, signal), [movieId])
    const resource = useMovieResource(loadMovies)
    if (resource.status === 'success' && !resource.data.length) return null
    return (
        <div className="w-full min-w-0 mt-12 lg:mt-20">
            <MovieSectionContent title="Você também pode gostar" resource={resource} hideWhenEmpty />
        </div>
    )
}
