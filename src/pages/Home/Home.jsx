import React from "react";
import { useEffect, useState } from "react";
import GetMovies from "components/Api/Api";
import TrendMovis from "components/TrendMovis/TrendMovis";

const Home = () => {

    const [movies, setMovies] = useState([]);
    // const [title, setTitle] = useState('');



    useEffect(() => {

        if (movies === []) {
            return;
        }
        GetMovies().then(movies => {
            console.log(movies);

            setMovies(prev => [...prev, ...movies]);
            // setTitle(movies.title);

        })
            .catch(error => console.log(error))
    }, [movies])


    return (

        <TrendMovis movies={movies} />


    )
}

export default Home;