import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

export default function Favorites() {
    const {favorites} = useMovieContext()

    return (
        <>
            {favorites.length > 0 ? (
                <div className="favorites">
                    <h2>Your Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites</p>
                </div>
            )}
        </>
    )
}