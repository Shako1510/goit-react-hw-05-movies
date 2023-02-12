import MovieDetails from '../../components/movieDetails/MovieDetails';

import { Outlet } from "react-router-dom"

export default function MovieDetailsPage() {
    return (
        <div>
            {<MovieDetails />}
            <Outlet />
        </div>
    )

}