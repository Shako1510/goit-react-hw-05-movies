import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesActor } from '../Api/Api';
import Loading from '../Loading/Loading';
import noImage from '../../images/noImage.png';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const URL = 'https://image.tmdb.org/t/p/w300';

    useEffect(() => {
        setLoading(true)
        fetchMoviesActor(movieId).then(setCast)
            .catch(error => console.log(error))
            .finally(setLoading(false))
    }, [movieId]);

    if (!cast) {
        return;
    }
    return (
        <div>
            {loading && <Loading />}
            <ul>
                {cast.map(({ id, name, character, profile_path }) =>
                    <li key={id}>
                        <img
                            src={profile_path ? `${URL}${profile_path}` : noImage}
                            alt={name}
                        />
                        <h2>{name}</h2>
                        <p>Character: {character}</p>

                    </li>
                )}
            </ul>
        </div>
    )

}

export default Cast;