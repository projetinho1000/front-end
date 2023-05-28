import star from '../../assets/img/star-half.svg';
import './styles.css';

function SideBar() {
  return (
    <nav className="sidebar-container close">
      <header>
        <div className="image-text">
          <span className="image">
            <img src={star} alt="logo" />
          </span>

          <div className="text header-text">
            <span className="name">WebMarket</span>
            <span className="profession">buscas</span>
          </div>
        </div>
      </header>

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
                <span className="text nav-text">Categorias</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu-links">
          <li className="nav-link">
            <a href="/signIn">
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
