import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import { Create } from 'pages/Create';
import './styles.css';
import { User } from 'firebase/auth';
import { useState } from 'react';

function Navbar() {
    const [user, setUser] = useState<User>({} as User);
    return (
        <header>
            <nav className="container">
                <div className="market-nav-content">                    
                    <a href="/">
                        <h1>WebMarket</h1>
                    </a>

                    <a href="https://github.com/projetinho1000">
                        <div className="market-contact-container">
                            <GithubIcon />
                            <p className="market-contact-link">/Projetin1000</p>
                        </div>
                    </a>

                    <a href="/signIn">
                        <div className="market-contact-container">                            
                            <p className="market-contact-link">/Login</p>
                            <p>{user.displayName}</p>
                        </div>
                    </a>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;