import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/trending';
const API_KEY = '15589180ce6c6d33d7bc8f830aab28ab';


const GetImages = async () => {
    const url = `${BASE_URL}?key=${API_KEY}`;

    const response = await axios.get(url);

    return response;

}

export default GetImages;