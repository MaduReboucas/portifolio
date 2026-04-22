import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="main-title">
        <h1>SEU PRÓXIMO PROJETO COMEÇA AQUI</h1>
        <button>
          <p>Projetos</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
