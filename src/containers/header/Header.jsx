import React from 'react';
import { RiArchiveFill } from 'react-icons/ri';
import comida from '../../assets/imagem3.jpg';
import './header.css';

const Header = () => (
  <div className="library__header section__padding" id="home">
    <div className="library__header-content">
      <div className="library__header-carousel">
        <div className="library__header-carousel-content">
          <div className="library__header-carousel-header">
            <div className="library__header-carousel-icone">
              <RiArchiveFill color="var(--color-default)" size={27} />
            </div>
            <p>BPMNPD</p>
            <p id="data">Quarta-feira - 07/12/2022</p>
          </div>
          <div className="library__header-carousel-text">
            <img src={comida} />
            <div className="library__header-carousel-text-news">
              <h2>Conheça mais sobre Biblioteca Pública Municipal Ney Pontes Duarte</h2>
              <p>Em 5 de abril de 1948 era publicado o Decreto Executivo número 4, criando a Biblioteca Pública Municipal. Após 73 anos de existência, e hoje denominada Biblioteca Municipal Ney Pontes Duarte, esse equipamento segue como marco da literatura, cultura e história de Mossoró. A criação da Biblioteca Municipal teve início com um movimento cultural, sugestão do professor Vingt-un Rosado, durante o programa de governo municipal do seu irmão, Dix-sept Rosado, em 1948.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
