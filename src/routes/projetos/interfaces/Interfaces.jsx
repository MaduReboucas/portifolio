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
            <a href="https://www.figma.com/design/MVEoQvfotPnYWVBCFF0cne/Untitled?node-id=0-1&t=wFYSnRk9K3RC0ifb-1">
              <div className="acdc-image"></div>
              <div className="descirption-i ">
                <h1>AC/DC</h1>
                <p>
                  Interface para website de homenagem <br />à banda AC/DC
                </p>
              </div>
            </a>
          </div>

          <div className="interface ">
            <a href="https://www.figma.com/design/Lvl4sACbmYECNQo9DLUw0m/APM---Layout?t=ThWGi0K6ipMcuweb-1">
              <div className="apm-image"></div>
              <div className="descirption-i">
                <h1>APM</h1>
                <p>
                  Atualização - Interface do website da <br /> Academia Pedro
                  Martinez
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface margin ">
            <a href="https://www.figma.com/design/xH75oWPhKiyPx17SK6wO8a/SOAD?t=ThWGi0K6ipMcuweb-1">
              <div className="soad-image"></div>
              <div className="descirption-i ">
                <h1>SOAD</h1>
                <p>
                  Interface para website de homenagem à <br /> banda System of a
                  Down
                </p>
              </div>
            </a>
          </div>

          <div className="interface ">
            <a href="https://www.figma.com/design/z9Wvodb4BMNLCEVZrKXcu4/Satech---Layout?t=ThWGi0K6ipMcuweb-1">
              <div className="saTech-image"></div>
              <div className="descirption-i">
                <h1>SaTech</h1>
                <p>Interface de website para trabalho escolar </p>
              </div>
            </a>
          </div>
        </div>

        <div className="interfaces-line">
          <div className="interface ">
            <a href="https://www.figma.com/design/6ZWcf1pU1CpBeBBwTqgTH8/Saia-do-Vermelho?node-id=0-1&t=ThWGi0K6ipMcuweb-1">
              <div className="sdv-image"></div>
              <div className="descirption-i">
                <h1>Saia do Vermelho</h1>
                <p>Interface de website para projeto escolar</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
