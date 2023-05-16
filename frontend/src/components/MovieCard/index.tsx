import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {

    return (
        <div>
            <img className="market-movie-card-image" src={movie.url} alt={movie.name} />
            <div className="market-card-bottom-container">
                <h3>{movie.name}</h3>
                {/* <MovieScore count={movie.count} score={movie.score} /> */}

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary market-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;
