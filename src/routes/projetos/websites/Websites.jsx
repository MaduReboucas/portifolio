import "./Websites.css";
import Navbar from "../../../components/navbar/Navbar";

const Interfaces = () => {
  return (
    <div id="Websites">
      <Navbar />
      <div className="maintitle-w">
        <div className="white">
          <h1>PROJETOS</h1>
        </div>
        <h1 className="gray">WEBSITES</h1>
      </div>
      <div className="websites-container">
        <div className="websites-line">
          <div className="website margin">
            <a href="https://github.com/MaduReboucas/to-do-list">
              <div className="todolist"></div>
              <div className="descirption-w ">
                <h1>To do List</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>

          <div className="website ">
            <a href="https://github.com/MaduReboucas/contagem-regressiva">
              <div className="cr"></div>
              <div className="descirption-w">
                <h1>Contagem Regressiva</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>
        </div>

        <div className="websites-line">
          <div className="website margin">
            <a href="https://github.com/MaduReboucas/react-axios">
              <div className="blog"></div>
              <div className="descirption-w ">
                <h1>Blog</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>

          <div className="website ">
            <a href="https://github.com/MaduReboucas/party-time">
              <div className="pt"></div>
              <div className="descirption-w">
                <h1>Party Time</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>
        </div>

        <div className="websites-line">
          <div className="website margin">
            <a href="https://github.com/MaduReboucas/memories">
              <div className="memory"></div>
              <div className="descirption-w ">
                <h1>Memories</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>

          <div className="website ">
            <a href="https://github.com/MaduReboucas/avaliador-ts">
              <div className="sda"></div>
              <div className="descirption-w">
                <h1>Sistema de Avaliação</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>
        </div>

        <div className="websites-line">
          <div className="website ">
            <a href="https://github.com/MaduReboucas/github_finder">
              <div className="gf"></div>
              <div className="descirption-w">
                <h1>Github Finder</h1>
                <p>Projeto - Udemy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
