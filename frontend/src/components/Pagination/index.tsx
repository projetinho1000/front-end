import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange } : Props) {

    return (
        <div className="market-pagination-container">
            <div className="market-pagination-box">
                <button className="market-pagination-button" 
                    disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="market-pagination-button" 
                    disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Arrow className="market-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
