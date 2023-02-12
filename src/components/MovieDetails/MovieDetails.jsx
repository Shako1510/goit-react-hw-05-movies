import { fetchMoviesById } from "../Api/Api";
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';
import noImage from '../../images/noImage.png';
import { Button, ListItem, ListLink } from "./MovieDetails.styled";


const MovieDetails = () => {
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backHrefLink = location.state?.from ?? '/';



    useEffect(() => {
        setLoading(true)
        fetchMoviesById(movieId).then(setMovieDetails)
            .catch(error => console.log(error))
            .finally(setLoading(false))
    }, [movieId]);

    if (!movieDetails) {
        return;
    }


    const { overview, genres, title, vote_average, poster_path } = movieDetails;

    return (
        <div>
            <Link to={backHrefLink}>
                <Button> Go back </Button>
            </Link>
            <div>
                <div>
                    {loading && <Loading />}
                    <div>
                        <img
                            src={poster_path ? `${imgUrl}${poster_path}` : noImage}
                            alt=""
                        />
                    </div>

                    <div>
                        <h2>{title}</h2>
                        <p>User score: {Math.round(vote_average * 10)}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h4>Genres</h4>
                        {genres && (
                            <ul>
                                {genres.map((genre, id) => {
                                    return <li key={id}>{genre.name}</li>;
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <h2>Additional information</h2>
                <ListLink>
                    <ListItem>
                        <NavLink to="cast">Cast</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="reviews">Reviews</NavLink>
                    </ListItem>
                </ListLink>
            </div>
        </div>
    )
}


export default MovieDetails;