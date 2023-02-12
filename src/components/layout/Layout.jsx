import NavBar from 'components/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


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