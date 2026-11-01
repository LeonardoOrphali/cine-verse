export const FAVORITES_STORAGE_KEY = 'cineverse:favorites:v1'

export function normalizeFavorite(movie) {
    if (!movie || typeof movie !== 'object') return null
    const id = typeof movie.id === 'string' && /^\d+$/.test(movie.id) ? Number(movie.id) : movie.id
    if (!Number.isSafeInteger(id) || id <= 0) return null

    const title = typeof movie.title === 'string' ? movie.title.trim() : ''
    const name = typeof movie.name === 'string' ? movie.name.trim() : ''
    const rating = Number(movie.vote_average ?? movie.average)
    return {
        id,
        title: title || name || 'Filme sem título',
        poster_path: typeof movie.poster_path === 'string' && movie.poster_path.startsWith('/') ? movie.poster_path : null,
        vote_average: Number.isFinite(rating) ? Math.min(10, Math.max(0, rating)) : 0,
        release_date: typeof movie.release_date === 'string' ? movie.release_date : null,
    }
}

export function parseFavorites(raw) {
    if (raw === null) return []
    const data = JSON.parse(raw)
    if (!Array.isArray(data)) throw new Error('Invalid favorites format')

    const seen = new Set()
    return data.flatMap(movie => {
        const normalized = normalizeFavorite(movie)
        if (!normalized || seen.has(normalized.id)) return []
        seen.add(normalized.id)
        return [normalized]
    })
}

export function readFavorites(getStorage = () => window.localStorage) {
    try {
        return { favorites: parseFavorites(getStorage().getItem(FAVORITES_STORAGE_KEY)), persistenceError: false }
    } catch {
        return { favorites: [], persistenceError: true }
    }
}

export function saveFavorites(favorites, getStorage = () => window.localStorage) {
    try {
        getStorage().setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
        return true
    } catch {
        return false
    }
}
