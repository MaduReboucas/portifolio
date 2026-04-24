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
          <Link className="navbar-link" to="/projetos">
            PROJETOS
          </Link>
        </li>
        <li id="li-navbar">
          <Link className="navbar-link" to="/about-me#Skills">
            COMPETÊNCIAS
          </Link>
        </li>
        <li id="li-navbar">
          <Link className="navbar-link" to="/about-me">
            SOBRE MIM
          </Link>
        </li>
        <li id="li-navbar">
          <button
            className="navbar-link"
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            CONTATO
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
