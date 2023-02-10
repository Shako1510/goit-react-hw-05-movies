import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";


const Layout = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

export default Layout;

// export const SharedLayout = () => {
//     return (
//         <Container>
//             <Header>
//                 <nav>
//                     <Link to="/" end>
//                         Home
//                     </Link>
//                     <Link to="/movies">Movies</Link>
//                 </nav>
//             </Header>
//             <Suspense fallback={<div>Loading page...</div>}>
//                 <Outlet />
//             </Suspense>
//         </Container>
//     );
// };