import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";
import NotFound from "./NotFound/NotFound";

// import { HederBox, StyledLink } from "./AppHeder.styled";
// import Movie from "./Movie/Movie";
// import { useState, useEffect } from "react";
// import GetImages from "./Api/Api";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));

export const App = () => {




  return (

    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>


    </Routes>

  );
};


  // const [movies, setMovies] = useState([]);


  // useEffect(() => {

  //   GetImages().then(respons => {
  //     setMovies(prev => [...prev, ...respons.data]);

  //   })
  //     .catch(error => console.log(error))




  // }, [])



