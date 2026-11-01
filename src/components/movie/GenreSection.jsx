import { useCallback, useState } from 'react'
import { getMovieGenres, getMoviesByGenre } from '../../services/movieService'
import useMovieResource from '../../hooks/useMovieResource'
import MovieSection, { MovieSectionContent } from './MovieSection'

function GenreMovies({ genreId, controls }) {
    const loadMovies = useCallback(signal => getMoviesByGenre(genreId, signal), [genreId])
    return <MovieSection title="Por gênero" loadMovies={loadMovies} controls={controls} />
}

export default function GenreSection() {
    const resource = useMovieResource(getMovieGenres)
    const [selection, setSelection] = useState(null)
    const genres = resource.data
    const selectedId = selection ?? genres.find(genre => genre.id === 28 || genre.name === 'Ação')?.id ?? genres[0]?.id

    if (resource.status !== 'success' || !genres.length) {
        return <MovieSectionContent title="Por gênero" resource={resource} />
    }

    const controls = (
        <div className="mx-8 sm:mx-12.5 mt-3 [container-type:inline-size]" role="group" aria-label="Gêneros de filmes">
            <select
                aria-label="Selecionar gênero"
                value={selectedId}
                onChange={event => setSelection(Number(event.target.value))}
                className="max-w-full rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-sm text-(--main-text) 2xl:hidden"
            >
                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>
            <div className="hidden 2xl:flex flex-nowrap gap-1">
            {genres.map(genre => (
                <button
                    key={genre.id}
                    type="button"
                    aria-pressed={genre.id === selectedId}
                    onClick={() => setSelection(genre.id)}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-[clamp(0.5rem,0.6cqw,0.75rem)] py-2 text-[clamp(0.75rem,0.85cqw,0.875rem)] cursor-pointer transition-colors ${genre.id === selectedId ? 'border-(--primary) bg-(--primary) text-white' : 'border-(--border) bg-(--surface) text-(--secondary-text) hover:text-white'}`}
                >
                    {genre.name}
                </button>
            ))}
            </div>
        </div>
    )

    // A new keyed carousel also resets navigation and cancels the previous request.
    return <GenreMovies key={selectedId} genreId={selectedId} controls={controls} />
}
