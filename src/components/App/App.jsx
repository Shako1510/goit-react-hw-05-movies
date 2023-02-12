import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../Home/Home';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { StyledApp } from './App.styled';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Layout from '../SharedLayout/Layout';


const Movie = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));


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


// import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";

// import { SharedLayout } from "../SharedLayout/SharedLayout";

// import NotFound from "../NotFound/NotFound";



// const Home = lazy(() => import("../Home/Home"));
// const Movies = lazy(() => import("../../pages/Movies/Movies/Movies"));

// export const App = () => {




//   return (

//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>


//     </Routes>

//   );
// };



