import test from 'node:test'
import assert from 'node:assert/strict'
import { FAVORITES_STORAGE_KEY, normalizeFavorite, parseFavorites, readFavorites, saveFavorites } from '../src/utils/favoritesStorage.js'

function memoryStorage(initial = null) {
    const entries = new Map(initial === null ? [] : [[FAVORITES_STORAGE_KEY, initial]])
    return {
        getItem: key => entries.get(key) ?? null,
        setItem: (key, value) => entries.set(key, value),
    }
}

test('normalizes both card formats and only keeps the fields used by favorites', () => {
    assert.deepEqual(normalizeFavorite({ id: '155', name: ' Batman ', average: '8.5', overview: 'Unused', credits: {} }), {
        id: 155, title: 'Batman', poster_path: null, vote_average: 8.5, release_date: null,
    })
    assert.equal(normalizeFavorite({ id: 0 }), null)
    assert.equal(normalizeFavorite({ id: 'invalid' }), null)
    assert.equal(normalizeFavorite(null), null)
})

test('handles missing titles, invalid ratings and missing posters', () => {
    const normalized = normalizeFavorite({ id: 1, title: '', vote_average: 'bad', poster_path: 42 })
    assert.equal(normalized.title, 'Filme sem título')
    assert.equal(normalized.vote_average, 0)
    assert.equal(normalized.poster_path, null)
    assert.equal(normalizeFavorite({ id: 1, vote_average: 100 }).vote_average, 10)
})

test('deduplicates IDs, skips incompatible entries and preserves most-recent-first ordering', () => {
    const parsed = parseFavorites(JSON.stringify([{ id: 2, title: 'Newest' }, null, { id: 1 }, { id: '2', title: 'Duplicate' }]))
    assert.deepEqual(parsed.map(movie => movie.id), [2, 1])
    assert.equal(parsed[0].title, 'Newest')
})

test('reads existing favorites without writing over them', () => {
    const original = JSON.stringify([{ id: 155, title: 'Batman' }])
    const storage = memoryStorage(original)
    const loaded = readFavorites(() => storage)
    assert.equal(loaded.persistenceError, false)
    assert.equal(loaded.favorites[0].id, 155)
    assert.equal(storage.getItem(FAVORITES_STORAGE_KEY), original)
})

test('starts empty when there is no stored list', () => {
    assert.deepEqual(readFavorites(() => memoryStorage()), { favorites: [], persistenceError: false })
    assert.deepEqual(parseFavorites(null), [])
})

test('invalid JSON or an incompatible root produces a recoverable error', () => {
    for (const raw of ['not JSON', '{}', 'null', '42']) {
        assert.deepEqual(readFavorites(() => memoryStorage(raw)), { favorites: [], persistenceError: true })
    }
})

test('persists additions and an empty list after removal', () => {
    const storage = memoryStorage()
    const favorites = [normalizeFavorite({ id: 155, title: 'Batman' })]
    assert.equal(saveFavorites(favorites, () => storage), true)
    assert.deepEqual(readFavorites(() => storage).favorites, favorites)
    assert.equal(saveFavorites([], () => storage), true)
    assert.deepEqual(readFavorites(() => storage).favorites, [])
})

test('storage getter, read and quota failures do not throw or mutate the in-memory list', () => {
    const unavailable = () => { throw new Error('Access denied') }
    assert.equal(readFavorites(unavailable).persistenceError, true)
    const favorites = [normalizeFavorite({ id: 1 })]
    assert.equal(saveFavorites(favorites, unavailable), false)
    assert.equal(saveFavorites(favorites, () => ({ setItem() { throw new Error('Quota exceeded') } })), false)
    assert.equal(readFavorites(() => ({ getItem() { throw new Error('Read denied') } })).persistenceError, true)
    assert.equal(favorites.length, 1)
})
