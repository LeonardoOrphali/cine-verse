import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FavoritesContext } from './FavoritesContext'
import { FAVORITES_STORAGE_KEY, normalizeFavorite, parseFavorites, readFavorites, saveFavorites } from '../utils/favoritesStorage'

export default function FavoritesProvider({ children }) {
    // Read before the first render; persistence happens only on user changes.
    const [state, setState] = useState(() => {
        const loaded = readFavorites()
        return { ...loaded, persistenceError: loaded.persistenceError ? 'read' : null }
    })
    const favoritesRef = useRef(state.favorites)

    const toggleFavorite = useCallback(movie => {
        const favorite = normalizeFavorite(movie)
        if (!favorite) return
        const current = favoritesRef.current
        const next = current.some(item => item.id === favorite.id)
            ? current.filter(item => item.id !== favorite.id)
            : [favorite, ...current]

        favoritesRef.current = next
        setState({ favorites: next, persistenceError: saveFavorites(next) ? null : 'write' })
    }, [])

    useEffect(() => {
        function handleStorage(event) {
            if (event.key !== FAVORITES_STORAGE_KEY && event.key !== null) return
            try {
                if (event.storageArea !== window.localStorage) return
                const next = parseFavorites(event.newValue)
                favoritesRef.current = next
                // Never write in response to a storage event, avoiding cross-tab loops.
                setState({ favorites: next, persistenceError: null })
            } catch {
                setState(current => ({ ...current, persistenceError: 'read' }))
            }
        }
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    const value = useMemo(() => {
        const ids = new Set(state.favorites.map(movie => movie.id))
        return { ...state, toggleFavorite, isFavorite: id => ids.has(Number(id)) }
    }, [state, toggleFavorite])

    return (
        <FavoritesContext.Provider value={value}>
            {children}
            {state.persistenceError && (
                <p role="status" className="fixed bottom-4 left-4 right-4 z-60 rounded-lg border border-(--border) bg-(--surface) p-3 text-sm text-(--main-text) shadow-lg sm:left-auto sm:max-w-sm">
                    {state.persistenceError === 'write'
                        ? 'Não foi possível salvar as alterações nos favoritos. Elas continuam disponíveis apenas nesta sessão.'
                        : 'Não foi possível ler os favoritos salvos neste navegador. Você pode continuar usando a lista nesta sessão.'}
                </p>
            )}
        </FavoritesContext.Provider>
    )
}
