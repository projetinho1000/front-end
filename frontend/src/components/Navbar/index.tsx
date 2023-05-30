import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import iconMenu from "assets/img/menu.svg";
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
            <div className="market-nav-menu" onClick={() => setOpen(!open)}>
              <img src={iconMenu} alt="menu" className="market-nav-icon" />
            </div>
            <h1 className="market-nav-title">WebMarket</h1>
          
            {Auth.user ? (
              <a onClick={Auth.signOut} className="market-nav-link">
                <div className="market-contact-container">
                  <p className="market-contact-link">Sair</p>
                </div>
              </a>
            ) : (
              <a onClick={Auth.signInWithGoogle} className="market-nav-link">
                <div className="market-contact-container">
                  <p className="market-contact-link">{}</p>
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
