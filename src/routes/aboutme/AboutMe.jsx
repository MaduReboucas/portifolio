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
      <div className="skils-containers">
        <h1 className="normal-color">COMPETÊNCIAS</h1>
        <div className="skils">
          <ul className="line-skils">
            <li>
              <a
                className="normal-color anchor"
                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              >
                HTML
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              >
                CSS
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              >
                JavaScript
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://developer.mozilla.org/en-US/docs/Glossary/TypeScript"
              >
                TypeScript
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started"
              >
                React
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://help.figma.com/hc/pt-br/articles/14563969806359-O-que-%C3%A9-o-Figma"
              >
                Figma
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://www.canva.com/pt_br/about/"
              >
                Canva
              </a>
            </li>
          </ul>

          <ul className="line-skils">
            <li>
              <a
                className="normal-color anchor"
                href="https://support.microsoft.com/pt-br/word"
              >
                Microsoft Word
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://support.microsoft.com/pt-br/office/o-que-%C3%A9-o-excel-94b00f50-5896-479c-b0c5-ff74603b35a3"
              >
                Microsoft Excel
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://docs.github.com/pt/get-started/start-your-journey/about-github-and-git"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://www.softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar/"
              >
                Cypress
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://www.rdstation.com/blog/marketing/o-que-faz-um-social-media/"
              >
                Social Media
              </a>
            </li>
          </ul>

          <ul className="line-skils">
            <li>
              <a
                className="normal-color anchor"
                href="https://www.zaptest.com/pt-br/testes-manuais-o-que-e-tipos-processos-abordagens-ferramentas-mais"
              >
                Manual Testing
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://www.servicenow.com/br/platform/workflow-data-fabric/what-is-test-automation.html"
              >
                Teste Automation
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://pm3.com.br/blog/web-design/"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                className="normal-color anchor"
                href="https://www.rdstation.com/blog/marketing/marketing-digital/"
              >
                Marketing Digital
              </a>
            </li>
          </ul>

          <ul className="line-skils">
            <li>
              <a
                className="normal-color anchor"
                href="https://learn.microsoft.com/pt-br/shows/visual-studio-code/"
              >
                VS Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
