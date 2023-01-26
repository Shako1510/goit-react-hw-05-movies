import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";
import { HederBox } from "./AppHeder.styled";
import styled from "styled-components";
// import Movie from "./Movie/Movie";
// import { useState, useEffect } from "react";
// import GetImages from "./Api/Api";



export const App = () => {

  // const [movies, setMovies] = useState([]);


  // useEffect(() => {

  //   GetImages().then(respons => {
  //     setMovies(prev => [...prev, ...respons.data]);

  //   })
  //     .catch(error => console.log(error))




  // }, [])


  const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

  return (
    <div>

      <nav>
        <HederBox>
          <StyledLink to='/'> HomePage </StyledLink>
          <StyledLink to='/movies'> Movies </StyledLink>
        </HederBox>


      </nav>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />

      </Routes>
    </div >



  );
};
