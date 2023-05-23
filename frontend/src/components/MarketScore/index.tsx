import MovieStars from "components/MarketStars";
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {

    return (
        <div className="market-score-container">
            <p className="market-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="market-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;
