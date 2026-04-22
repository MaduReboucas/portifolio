import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-link" href="">
        <h1>Meu Portifólio</h1>
      </a>
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
          <a className="navbar-link" href="">
            SOBRE MIM
          </a>
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
