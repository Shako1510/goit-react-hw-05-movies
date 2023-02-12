import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './Home';
import NotFoundPage from 'pages/NotFoundPage';
import { StyledApp } from './AppStyled';
import Cast from './Cast';
import Reviews from './reviews/Reviews';
import Layout from 'components/Layout';


const Movie = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));


export const App = () => {

  return (
    <StyledApp>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </StyledApp>
  );
};



