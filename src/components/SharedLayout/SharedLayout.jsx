import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";



export const SharedLayout = () => {
    return (

        <Container>
            <Header>
                <nav>
                    <Link to="/" end>
                        Home
                    </Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>


        //     <>

        //   <nav>
        //     <HederBox>
        //       <StyledLink to='/'> HomePage </StyledLink>
        //       <StyledLink to='/movies'> Movies </StyledLink>
        //     </HederBox>
        //   </nav>


        //   <Routes>
        //     <Route path="/" element={<HomePage />} />
        //     <Route path="/movies" element={<Movies />} />

        //   </Routes>
        // </ >
    );
};