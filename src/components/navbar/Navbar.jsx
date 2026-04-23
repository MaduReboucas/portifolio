import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        <h1>Meu Portifólio</h1>
      </Link>
      <ul id="list-navbar">
        <li id="li-navbar">
          <a className="navbar-link" href="">
            PROJETOS
          </a>
        </li>
        <li id="li-navbar">
          <a className="navbar-link" href="">
            COMPETÊNCIAS
          </a>
        </li>
        <li id="li-navbar">
          <Link className="navbar-link" to="/about-me">
            SOBRE MIM
          </Link>
        </li>
        <li id="li-navbar">
          <a className="navbar-link" href="">
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
