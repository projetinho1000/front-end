import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import './style.css';

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {

    function abrirWhatsapp(){
        return window.open(`https://wa.me/55${movie.whatsapp}`, '_black')
    }

    return (
        <div className="card-container">
            <img className="market-movie-card-image" src={movie.url} alt={movie.name} />
            <div className="market-card-bottom-container">
                <h3>{movie.name}</h3>
                <p>{movie.description}</p>
                {/* <MovieScore count={movie.count} score={movie.score} /> */}

                <button className="btn-wpp" onClick={() => abrirWhatsapp()}>
                    Whatsapp
                </button>

                {/* <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary market-btn">Avaliar</div>
                </Link> */}

            </div>
        </div>
    );
}

export default MovieCard;
