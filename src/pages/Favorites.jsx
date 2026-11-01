import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useFavorites from '../hooks/useFavorites'
import MovieGridView from '../components/movie/MovieGridView'

export default function Favorites() {
    const { favorites } = useFavorites()
    const pageRef = useRef(null)
    const emptyRef = useRef(null)
    const pendingFocus = useRef(undefined)

    function rememberFocus(movieId) {
        const index = favorites.findIndex(movie => movie.id === Number(movieId))
        pendingFocus.current = favorites[index + 1]?.id ?? favorites[index - 1]?.id ?? null
    }

    useLayoutEffect(() => {
        const id = pendingFocus.current
        if (id === undefined) return
        pendingFocus.current = undefined
        const next = id === null ? emptyRef.current : pageRef.current.querySelector(`[data-favorite-id="${id}"]`)
        const target = next ?? emptyRef.current
        target?.focus()
    }, [favorites])

    return (
        <main ref={pageRef} className="w-full min-w-0 min-h-[60vh]">
            {favorites.length ? (
                <MovieGridView movies={favorites} title="Meus favoritos" isloading={false} onFavoriteRemove={rememberFocus} />
            ) : (
                <section className="w-full px-4 pt-36 sm:px-8 sm:pt-25 lg:px-14">
                    <h1 className="mb-8">Meus favoritos</h1>
                    <div className="py-6 text-center sm:py-10">
                        <p ref={emptyRef} tabIndex={-1}>Você ainda não adicionou filmes aos favoritos.</p>
                        <Link to="/" viewTransition className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-(--primary) px-4 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Explorar filmes
                        </Link>
                    </div>
                </section>
            )}
        </main>
    )
}
