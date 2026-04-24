import "./AboutMe.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Navbar from "../../components/navbar/Navbar";
import Skils from "./Skils";

// imagens
import meImage from "../../img/me-image.png";

const AboutMe = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="aboutme">
      <Navbar />

      <div className="maintitle-container">
        <div className="maintitle">
          <h1 className="normal-color">
            SOBRE <br /> MIM
          </h1>
          <p className="degrade">Oi, eu sou a Madu!</p>
        </div>
        <img src={meImage} alt="foto-minha" id="me-img" />
      </div>
      <div className="description">
        <p className="degrade">
          Sou desenvolvedora front-end em formação, com foco em React e na
          criação de interfaces modernas e responsivas. Tenho experiência com
          HTML, CSS, JavaScript, TypeScript e React, além de conhecimento em
          design e usabilidade. Também trabalho com marketing digital, criando
          conteúdo estratégico para mídias sociais. Busco oportunidades para
          crescer na área e contribuir com projetos inovadores.
        </p>
      </div>
      <Skils />
    </div>
  );
};

export default AboutMe;
