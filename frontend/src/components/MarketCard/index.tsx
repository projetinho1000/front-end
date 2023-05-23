import MovieScore from "components/MarketScore";
import { Link } from "react-router-dom";

import './style.css';
import { Register } from "@Types/register";

type Props = {
    register: Register;
}

function MovieCard( { register } : Props) {

    function abrirWhatsapp(){
        return window.open(`https://wa.me/55${register.whatsapp}`, '_black')
    }

    return (
        <div className="card-container">
            <img className="market-movie-card-image" src={register.url} alt={register.name} />
            <div className="market-card-bottom-container">
                <h3>{register.name}</h3>
                <p>{register.description}</p>
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
