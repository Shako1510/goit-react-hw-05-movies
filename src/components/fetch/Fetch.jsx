import axios from "axios";

const API_KEY = '15589180ce6c6d33d7bc8f830aab28ab';
const BASE_URL = 'https://api.themoviedb.org/3';
const media_type = 'movie';
const time_window = 'day';


export async function fetchMoviesBySearchQuery(query) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        const arrayMovies = await response.data.results;
        console.log(arrayMovies);
        return arrayMovies;
    }
    catch (error) {
        console.log(error)
    }
};


export async function fetchMoviesTrending() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}`)
        const arrayMovies = await response.data.results;
        return arrayMovies;
    }
    catch (error) {
        console.log(error)
    }
};


export async function fetchMoviesById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
        const arrayMovies = await response.data;
        return arrayMovies;
    }
    catch (error) {
        console.log(error)
    }
};


export async function fetchMoviesActor(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
        const arrayMovies = await response.data.cast;
        return arrayMovies;
    }
    catch (error) {
        console.log(error)
    }
}


export async function fetchMoviesReviews(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
        const arrayMovies = await response.data.results;
        return arrayMovies;
    }
    catch (error) {
        console.log(error)
    }
}