import { api } from './movieDbAPI'

const defaultParams = {
    language: 'pt-BR',
}


export const getPopularMovies = async () => {
    const response = await api.get('/movie/popular', {
        params: defaultParams,
    })
    return response.data.results
}


export const getTrendingMovies = async () => {
    const response = await api.get('/trending/movie/day', {
        params: defaultParams,
    })
    return response.data.results
}


export const searchMovies = async (query) => {
    if(!query.trim()) return
    
    const response = await api.get('/search/movie', {
        params: {
            query,
            defaultParams,
        },
    })
    return response.data.results
}


export const getMovieDetails = async () => {
    const response = await api.get('/movie/2', {
        params: defaultParams,
    })
    
    const data = response.data
    const details = {
        title: data.title,
        overview: data.overview,
        poster: data.poster_path,
        backdrop: data.backdrop_path,
        average: data.vote_average,
        release: data.release_date,
        budget: data.budget,
        genres: data.genres,
    }
    return details
}