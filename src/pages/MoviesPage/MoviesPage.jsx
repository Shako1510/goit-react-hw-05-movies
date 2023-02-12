import Movies from 'components/movies/Movies';
import { Outlet } from "react-router-dom"

export default function MoviesPage() {
    return (
        <div>
            {<Movies />}
            <Outlet />
        </div>
    )

}