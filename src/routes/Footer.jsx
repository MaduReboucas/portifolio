import React from "react";
import "./Footer.css";

//imagens
import emailIco from "../img/email-ico.png";
import githubIco from "../img/github-ico.png";
import phoneIco from "../img/phone-ico.png";
import inIco from "../img/linkedin-ico.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h2>Desenvolvido por Madu Rebouças</h2>
        <p>Contato</p>
        <div className="contatos">
          <ul>
            <li className="contatos-btn">
              <img src={githubIco} alt="github-ico" />
              <a href="https://github.com/MaduReboucas">MaduReboucas</a>
            </li>

            <li className="contatos-btn">
              <img src={emailIco} alt="email-ico" />
              <span>mariadudareboucas@gmail.com</span>
            </li>

            <li className="contatos-btn">
              <img src={inIco} alt="linkedin-ico" />
              <a href="www.linkedin.com/in/madureboucas">
                Maria Eduarda Rebouças
              </a>
            </li>

            <li className="contatos-btn">
              <img src={phoneIco} alt="phone-ico" />

              <span>(55) 11 98821-9722</span>
            </li>
          </ul>
          <p className="copy-right">&copy; 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
