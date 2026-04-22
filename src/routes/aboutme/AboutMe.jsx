import "./AboutMe.css";

// components
import Navbar from "../../components/navbar/Navbar";

// imagens
import meImage from "../../img/me-image.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <Navbar />
      <div className="maintitle-container">
        <div className="maintitle">
          <h1>
            SOBRE <br /> MIM
          </h1>
          <p>Oi, eu sou a Madu!</p>
        </div>
        <img src={meImage} alt="foto-minha" />
      </div>
      <div className="description">
        <p>
          Sou desenvolvedora front-end em formação, com foco em React e na
          criação de interfaces modernas e responsivas. Tenho experiência com
          HTML, CSS, JavaScript, TypeScript e React, além de conhecimento em
          design e usabilidade. Também trabalho com marketing digital, criando
          conteúdo estratégico para mídias sociais. Busco oportunidades para
          crescer na área e contribuir com projetos inovadores.
        </p>
      </div>
      <div className="skils-containers">
        <h1>COMPETÊNCIAS</h1>
        <div className="skils">
          <div className="line-skils">
            <ul>
              <li>
                <a href="">HTML</a>
              </li>
              <li>
                <a href="">CSS</a>
              </li>
              <li>
                <a href="">JavaScript</a>
              </li>
              <li>
                <a href="">TypeScript</a>
              </li>
              <li>
                <a href="">React</a>
              </li>
              <li>
                <a href="">Figma</a>
              </li>
            </ul>
          </div>

          <div className="line-skils">
            <ul>
              <li>
                <a href="">Canva</a>
              </li>
              <li>
                <a href="">Microsoft Word</a>
              </li>
              <li>
                <a href="">Microsoft Excel</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Cypress</a>
              </li>
            </ul>
          </div>

          <div className="line-skils">
            <ul>
              <li>
                <a href="">Social Media</a>
              </li>
              <li>
                <a href="">Manual Testing</a>
              </li>
              <li>
                <a href="">Teste Automation</a>
              </li>
              <li>
                <a href="">Web Design</a>
              </li>
            </ul>
          </div>

          <div className="line-skils">
            <ul>
              <li>
                <a href="">Marketing Digital</a>
              </li>
              <li>
                <a href="">VS Code</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
