import { api } from "./movieDbAPI"
import { mapMovieDetails } from "../mappers/movie.mapper"

const defaultParams = {
    language: 'pt-BR',
    include_adult: false,
}

const fetchData = async (url, params = {}) => {
    const response = await api.get(url, {
        params: {
            ...defaultParams,
            ...params,
        }
    })

    return response.data
}

export const getPopularMovies = async () => {
    const data = await fetchData("/movie/popular")
    return data.results
}

export const getTrendingMovies = async () => {
    const data = await fetchData("/trending/movie/day")
    return data.results
}

export const searchMovies = async (query) => {
    if (!query.trim()) return

    const data = await fetchData("/search/movie", { query })
    return data.results
}

export const getMovieDetails = async (id) => {
    const data = await fetchData(`/movie/${id}`)
    return mapMovieDetails(data)
}