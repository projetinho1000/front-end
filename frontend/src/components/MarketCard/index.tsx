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

                <div className='container-slug'>
                    {
                        register.category.map(item => {
                            return <div className='slug'>{ item }</div>
                        })
                    }
                </div>
                
                <button className="btn-wpp" onClick={() => abrirWhatsapp()}>
                    Whatsapp
                </button>
    
            </div>
        </div>
    );
}

export default MovieCard;
