import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="main-title">
        <h1>SEU PRÓXIMO PROJETO COMEÇA AQUI</h1>
        <Link className="link" to="/projetos">
          <button>
            <p>Projetos</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
