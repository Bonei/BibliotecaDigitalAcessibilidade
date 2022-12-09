import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import prefeitura from '../../assets/logo-prefeitura-mossoro-colorida.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={prefeitura} alt="prefeitura" />
        <p>Praça da Redencao, s/n - Centro, Mossoró - RN, 59600-065 <br /> Todos os direitos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Menu</h4>
        <p>Serviços</p>
        <p>Catálogo</p>
        <p>Novas Aquisições</p>
        <p>Livros Digitais</p>
        <p>Noticías</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>MOSSORÓ</h4>
        <p>Ínicio </p>
        <p>História </p>
        <p>Geografia</p>
        <p>Economia</p>
        <p>População</p>
        <p>Turismo</p>
        <p>Cultura</p>
        <p>Símbolos</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contatos</h4>
        <p>Praça da Redencao, s/n - Centro, Mossoró - RN, 59600-065</p>
        <p>084-123456789</p>
        <p>info@bibliotecadigitalrosamilenamestrado.net</p>
      </div>
      <div className="gpt3__footer-links_div">
        <div>
          <a href="https://www.instagram.com/bibliotecaneypontes/?igshid=MDM4ZDc5MmU=" target="_blank" rel="noreferrer" aria-label="Instagram"><RiInstagramFill color="var(--color-bg)" size={27} /></a>
          {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><RiFacebookBoxFill color="var(--color-bg)" size={27} /></a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><RiTwitterFill color="var(--color-bg)" size={27} /></a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Youtube"><RiYoutubeFill color="var(--color-bg)" size={27} /></a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Linkedin"><RiLinkedinBoxFill color="var(--color-bg)" size={27} /></a> */}
        </div>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Biblioteca Pública Municipal Ney Pontes Duarte. Todos os direitos reservados. | Desenvolvimento: Arthur César</p>
    </div>
  </div>
);

export default Footer;
