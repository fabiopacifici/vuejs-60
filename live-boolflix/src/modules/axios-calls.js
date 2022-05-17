import axios from "axios"
const base_url = "https://api.themoviedb.org/3"
const API_KEY = "8a82473cbca2910e464dbdb44137c5cf"
const callVideosAPI = (id) => {
  return axios.get(`${base_url}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)

}
const callPopularMoviesAPI = () => {
  return axios.get(`${base_url}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
}

/**
 * ### Axios call for the Moviedb Search API
 * Performs and ajax call using axios and retrns a promise
 * Accepts two params, the type of search and the query value
 * https: //developers.themoviedb.org/3/search
 * @param {string} type The string for the identified of the search
 * @param {string} query The value for the query key of the query string
 * @returns Promise
 */
const callSearchAPI = (type, query) => {
  const url = `${base_url}/search/${type}?api_key=${API_KEY}&query=${query}`
  return axios.get(url)
}
const callCastAPI = (type, id) => {
  const url = `${base_url}/${type}/${id}/credits?api_key=${API_KEY}`
  return axios.get(url)
}
const callGenreAPI = (type) => {
  const url = `${base_url}/genre/${type}/list?api_key=${API_KEY}`
  return axios.get(url)
}


export {
  callVideosAPI,
  callPopularMoviesAPI,
  callSearchAPI,
  callCastAPI,
  callGenreAPI
}