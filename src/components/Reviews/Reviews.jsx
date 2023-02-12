import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/Api/Api';
import Loading from 'components/Loading/Loading';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true)
        fetchMoviesReviews(movieId).then(setReviews)
            .catch(error => console.log(error))
            .finally(setLoading(false))
    }, [movieId]);

    if (!reviews) {
        return;
    }
    return (
        <div>
            {loading && <Loading />}

            <ul>
                {reviews.map(({ author, content, id }) => {
                    return (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    );
                })}
            </ul>

            {reviews.length === 0 && (
                <p>Oops, we don't have any reviews</p>)}
        </div>
    )

}

export default Reviews;