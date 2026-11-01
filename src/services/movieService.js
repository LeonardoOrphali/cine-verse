import { api } from "./movieAPI"
import { mapMovieDetails } from "../mappers/movieMapper"

const defaultParams = {
    language: 'pt-BR',
    include_adult: false,
}

const fetchData = async (url, params = {}, signal) => {
    const response = await api.get(url, {
        signal,
        params: {
            ...defaultParams,
            ...params,
        }
    })

    return response.data
}

export const getPopularMovies = async (signal) => {
    const data = await fetchData("/movie/popular", {}, signal)
    return data.results
}

export const getTrendingMovies = async (signal) => {
    const data = await fetchData("/trending/movie/day", {}, signal)
    return data.results
}

export const searchMovies = async (query) => {
    if (!query.trim()) return

    const data = await fetchData("/search/movie", { query })
    return data.results
}

export const getMovieDetails = async (id, signal) => {
    const data = await fetchData(`/movie/${id}?append_to_response=credits`, {}, signal)
    return mapMovieDetails(data)
}
export const getNowPlayingMovies = async (signal) => {
    const data = await fetchData('/movie/now_playing', { region: 'BR' }, signal)
    return data.results
}

export const getUpcomingMovies = async (signal) => {
    const data = await fetchData('/movie/upcoming', { region: 'BR' }, signal)
    return data.results
}

export const getTopRatedMovies = async (signal) => {
    const data = await fetchData('/movie/top_rated', { region: 'BR' }, signal)
    return data.results
}

export const getMovieGenres = async (signal) => {
    const data = await fetchData('/genre/movie/list', {}, signal)
    return data.genres
}

export const getMoviesByGenre = async (genreId, signal) => {
    const data = await fetchData('/discover/movie', { with_genres: genreId, sort_by: 'popularity.desc' }, signal)
    return data.results
}

export const getMovieRecommendations = async (id, signal) => {
    const data = await fetchData(`/movie/${id}/recommendations`, {}, signal)
    return data.results
}
