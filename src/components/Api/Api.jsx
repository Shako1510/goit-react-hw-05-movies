import axios from "axios";

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '15589180ce6c6d33d7bc8f830aab28ab';
// const media_type = 'movie';
// const time_window = 'day';


const GetMovies = async () => {
    // const url = `${BASE_URL}/trending/${media_type}/${time_window}?key=${API_KEY}`;
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=15589180ce6c6d33d7bc8f830aab28ab`;
    const response = await axios.get(url);
    const movies = response.data.results;

    return movies;


}



export default GetMovies;