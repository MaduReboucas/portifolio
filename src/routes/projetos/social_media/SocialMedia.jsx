import "./SocialMedia.css";
import Navbar from "../../../components/navbar/Navbar";

const SocialMedia = () => {
  return (
    <div id="SocialMedia">
      <Navbar />
      <div className="maintitle-s">
        <div className="white">
          <h1>PROJETOS</h1>
        </div>
        <h1 className="gray">SOCIAL MEDIA</h1>
      </div>
      <div className="social-container">
        <div className="social-line">
          <div className="social margin">
            <a href="">
              <div className="zendova"></div>
              <div className="description-s ">
                <h1>Zendova</h1>
                <p>Promoção do sistema através de marketing digital</p>
              </div>
            </a>
          </div>

          <div className="social margin">
            <a href="">
              <div className="mba"></div>
              <div className="description-s ">
                <h1 className="italico">Meu bebê aquático</h1>
                <p>
                  Promoção do livro Meu bebê aquático - Sheila Barbin, através
                  de markting digital
                </p>
              </div>
            </a>
          </div>

          <div className="social">
            <a href="">
              <div className="zendova"></div>
              <div className="description-s ">
                <h1>Zendova</h1>
                <p>Promoção do sistema através de marketing digital</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
