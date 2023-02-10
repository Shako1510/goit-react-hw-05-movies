import Movies from '../../../components/Movies/Movies';
import { Outlet } from "react-router-dom"

export default function MoviesPage() {
    return (
        <div>
            {<Movies />}
            <Outlet />
        </div>
    )

}