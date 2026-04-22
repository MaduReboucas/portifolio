import "./Interfaces.css";
import Navbar from "../../../components/navbar/Navbar";

// images pb
import acdcPb from "../img/pb/img-acdc.png";
import apmPb from "../img/pb/img-apm.png";
import sdvPb from "../img/pb/img-sdv.png";
import soadPb from "../img/pb/img-soad.png";
import stPb from "../img/pb/img-st.png";

const Interfaces = () => {
  return (
    <div id="Interfaces">
      <Navbar />
      <div className="maintitle-i">
        <h1>
          PROJETOS <span>INTERFACES</span>
        </h1>
      </div>
      <div className="interfaces-container">
        <div className="interfaces-line">
          <div className="interface">
            <img src={acdcPb} alt="acdc-image" />
            <h1>AC/DC</h1>
            <p>Interface para website de homenagem à banda AC/DC</p>
          </div>

          <div className="interface">
            <img src={apmPb} alt="apm-image" />
            <h1>APM</h1>
            <p>Atualização - Interface do website da Academia Pedro Martinez</p>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface">
            <img src={soadPb} alt="soad-image" />
            <h1>SOAD</h1>
            <p>Interface para website de homenagem à banda System of a Down</p>
          </div>

          <div className="interface">
            <img src={stPb} alt="saTech-image" />
            <h1>SaTech</h1>
            <p>Interface de website para trabalho escolar </p>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface">
            <img src={sdvPb} alt="sdv-image" />
            <h1>Saia do Vermelho</h1>
            <p>Interface de website para projeto escolar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
