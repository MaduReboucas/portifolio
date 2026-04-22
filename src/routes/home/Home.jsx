import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <nav className="navbar">
        <h1>Meu Portifólio</h1>
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
      <div className="main-title">
        <h1>SEU PRÓXIMO PROJETO COMEÇA AQUI</h1>
        <button>Projetos</button>
      </div>
    </div>
  );
};

export default Home;
