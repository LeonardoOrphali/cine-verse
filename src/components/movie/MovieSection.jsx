import MovieCarousel from './MovieCarousel'
import useMovieResource from '../../hooks/useMovieResource'

export function MovieSectionContent({ title, resource, controls, hideWhenEmpty = false }) {
    const { data, status, retry } = resource
    if (status === 'success' && !data.length && hideWhenEmpty) return null

    if (status === 'error' || (status === 'success' && !data.length)) {
        return (
            <section className="w-full min-w-0 lg:w-[95%] mx-auto pb-8 lg:pb-12" aria-label={title}>
                <h1 className="pl-8 sm:pl-12.5">{title}</h1>
                {controls}
                <div className="px-8 sm:px-12.5 pt-4 text-sm text-(--secondary-text)" role="status">
                    <p>{status === 'error' ? 'Não foi possível carregar esta seção.' : 'Nenhum filme disponível no momento.'}</p>
                    {status === 'error' && (
                        <button type="button" onClick={retry} className="mt-2 text-(--main-text) underline underline-offset-4 cursor-pointer">
                            Tentar novamente
                        </button>
                    )}
                </div>
            </section>
        )
    }

    return <MovieCarousel title={title} movies={data} isloading={status === 'loading'} controls={controls} />
}

export default function MovieSection({ loadMovies, ...props }) {
    const resource = useMovieResource(loadMovies)
    return <MovieSectionContent {...props} resource={resource} />
}
