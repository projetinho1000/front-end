import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';

import { validateEmail } from 'utils/validate';
import './styles.css';
import { getMovie } from 'service/getMovie';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const [movie, setMovie] = useState<Movie>();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }
            
        getMovie();
    }

    return (
        <div className="market-form-container">
            <img className="market-movie-card-image" src={movie?.url} alt={movie?.name} />
            <div className="market-card-bottom-container">
                <h3>{movie?.name}</h3>
                <form className="market-form" onSubmit={handleSubmit}>
                    <div className="form-group market-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group market-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="market-form-btn-container">
                        <button type="submit" className="btn btn-primary market-btn">Salvar</button>
                    </div>
                </form >

                <button className="btn btn-primary market-btn mt-3">Cancelar</button>

            </div >
        </div >
    );
}

export default FormCard;
