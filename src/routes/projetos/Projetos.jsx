import "./Projetos.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

// imagens
import interfaces from "./img/interfaces-img.png";
import socialMedia from "./img/socialmedia-img.png";
import website from "./img/websites-img.png";

const Projetos = () => {
  return (
    <div id="Projetos">
      <Navbar />
      <div className="projetos-container">
        <div className="title-p">
          <h1>PROJETOS</h1>
        </div>
        <div className="buttons-container">
          <div className="projetos-btn">
            <Link className="link-projetos" to="/projetos/interfaces">
              <img className="img-btn" src={interfaces} alt="interface-ico" />
              <h2 className="title-btn">Interfaces</h2>
            </Link>
          </div>
          <div className="projetos-btn">
            <Link className="link-projetos" to="/projetos/websites">
              <img className="img-btn" src={website} alt="websites-ico" />
              <h2 className="title-btn">Websites</h2>
            </Link>
          </div>
          <div className="projetos-btn">
            <Link className="link-projetos" to="/projetos/social-media">
              <img
                className="img-btn"
                src={socialMedia}
                alt="social-media-ico"
              />
              <h2 className="title-btn">Social Media</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
