import { NavLink, Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Retour à l'accueil">
        <img src={Logo} alt="Logo de Kasa" className="logo" />
      </Link>

      <nav className="navbar">
        <NavLink className={({ isActive }) => (isActive ? "navbar-link--active" : "navbar-link")} to="/">
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navbar-link--active" : "navbar-link")} to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
