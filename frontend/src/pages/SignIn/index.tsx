import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import './styles.css'
import { GoogleLogo } from 'phosphor-react';
import { auth } from 'service/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [user, setUser] = useState<User>({} as User);
    const navigate = useNavigate();

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                navigate('/form');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
        <div className="market-container-login">
            <div className='market-user'>                
                <small>{user.displayName}</small>
            </div>

            <h1>Acesse sua conta </h1>

            <div className="market-input">
                <input type="email" placeholder='Email' />
                <p />
                <input type="password" placeholder='Senha' />
            </div>

            <div className="btn-container">
                <button type="button" className="market-button-login">
                    Entra
                </button>

                <button type="button" className="market-button-google" onClick={handleGoogleSignIn}>
                    <GoogleLogo />
                    Entra com Google
                </button>
            </div>

        </div>
    )
}

export default SignIn;