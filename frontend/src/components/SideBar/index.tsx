/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useAuth } from "context/authContext";
import "./styles.css";

function SideBar({ open }: { open: boolean }) {
  const Auth = useAuth();
  return (
    <nav className={`sidebar-container ${open && "open"}`}>
      <header></header>

      {!!Auth.user?.photoURL && (
        <div className="image">
          <img src={Auth.user?.photoURL} />
          {Auth.user?.displayName}
        </div>
      )}
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="search" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="/create">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Anúncios</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Contratos</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/form">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Avaliações</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu-links">
          <li className="nav-link">
            {!!Auth.user ? (
              <a onClick={Auth.signOut}>
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            ) : (
              <a onClick={Auth.signInWithGoogle}>
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Realizar login</span>
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
