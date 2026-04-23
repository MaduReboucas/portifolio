import "./Projetos.css";
import Navbar from "../../components/navbar/Navbar";

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
          <div className="interface-btn">
            <img className="img-btn" src={interfaces} alt="interface-ico" />
            <h2 className="title-btn">Interfaces</h2>
          </div>
          <div className="interface-btn">
            <img className="img-btn" src={website} alt="websites-ico" />
            <h2 className="title-btn">Websites</h2>
          </div>
          <div className="interface-btn">
            <img className="img-btn" src={socialMedia} alt="social-media-ico" />
            <h2 className="title-btn">Social</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
