import MovieDetails from '../../components/MovieDetails/MovieDetails';

import { Outlet } from "react-router-dom"

export default function MovieDetailsPage() {
    return (
        <div>
            {<MovieDetails />}
            <Outlet />
        </div>
    )

}