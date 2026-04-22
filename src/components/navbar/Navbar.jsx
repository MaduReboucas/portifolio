import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="">
        <h1>Meu Portifólio</h1>
      </a>
      <ul>
        <li>
          <a href="">PROJETOS</a>
        </li>
        <li>
          <a href="">COMPETÊNCIAS</a>
        </li>
        <li>
          <a href="">SOBRE MIM</a>
        </li>
        <li>
          <a href="">CONTATO</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
