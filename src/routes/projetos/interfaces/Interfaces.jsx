import "./Interfaces.css";
import Navbar from "../../../components/navbar/Navbar";

const Interfaces = () => {
  return (
    <div id="Interfaces">
      <Navbar />
      <div className="maintitle-i">
        <div className="white">
          <h1>PROJETOS</h1>
        </div>
        <h1 className="gray">INTERFACES</h1>
      </div>
      <div className="interfaces-container">
        <div className="interfaces-line">
          <div className="interface margin">
            <div className="acdc-image"></div>
            <div className="descirption-i ">
              <h1>AC/DC</h1>
              <p>
                Interface para website de homenagem <br />à banda AC/DC
              </p>
            </div>
          </div>

          <div className="interface ">
            <div className="apm-image"></div>
            <div className="descirption-i">
              <h1>APM</h1>
              <p>
                Atualização - Interface do website da <br /> Academia Pedro
                Martinez
              </p>
            </div>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface margin ">
            <div className="soad-image"></div>
            <div className="descirption-i ">
              <h1>SOAD</h1>
              <p>
                Interface para website de homenagem à <br /> banda System of a
                Down
              </p>
            </div>
          </div>

          <div className="interface ">
            <div className="saTech-image"></div>
            <div className="descirption-i">
              <h1>SaTech</h1>
              <p>Interface de website para trabalho escolar </p>
            </div>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface ">
            <div className="sdv-image"></div>
            <div className="descirption-i">
              <h1>Saia do Vermelho</h1>
              <p>Interface de website para projeto escolar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
