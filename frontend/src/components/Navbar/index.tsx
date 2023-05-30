import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";
import { useAuth } from "context/authContext";
import SideBar from "components/SideBar";
import { useState } from "react";

function Navbar() {
  const Auth = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="container" style={{ zIndex: 1000 }}>
          <div className="market-nav-content">
            <a onClick={() => setOpen(!open)}>
              <h1>WebMarket</h1>
            </a>

            <a href="https://github.com/projetinho1000">
              <div className="market-contact-container">
                <GithubIcon />
                <p className="market-contact-link">/Projetin1000</p>
              </div>
            </a>

            {Auth.user ? (
              <a onClick={Auth.signOut}>
                <div className="market-contact-container">
                  <p className="market-contact-link">Sair</p>
                </div>
              </a>
            ) : (
              <a onClick={Auth.signInWithGoogle}>
                <div className="market-contact-container">
                  <p className="market-contact-link">Login</p>
                </div>
              </a>
            )}
          </div>
        </nav>
      </header>
      <SideBar open={open} />
    </>
  );
}

export default Navbar;
