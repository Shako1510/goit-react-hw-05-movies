import TrendItem from '../TrendItem/TrendItem';
import { GalleryList } from './TrendMovis.styled';
import { useEffect } from 'react';

// import PropTypes from 'prop-types';

const TrendMovis = ({ movies }) => {

    useEffect(() => {
        // scrollPage();
    }, [movies]);

    // const scrollPage = () => {
    //     const { height: cardHeight } = document
    //         .querySelector('#gallery')
    //         .firstElementChild.getBoundingClientRect();

    //     window.scrollBy({
    //         top: cardHeight,
    //         behavior: 'smooth',
    //     });
    // }


    return (
        <GalleryList>
            {movies.map(movi => (
                <TrendItem key={movies.id} movis={movi} />
            ))}
        </GalleryList>
    );
};

export default TrendMovis;

// TrendMovis.propTypes = {
//     images: PropTypes.array,

// };