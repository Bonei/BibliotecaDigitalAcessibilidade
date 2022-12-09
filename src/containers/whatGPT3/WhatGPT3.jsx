import React from 'react';
import Feature from '../../components/feature/Feature';
import imagem4 from '../../assets/imagem4.jpg';
import imagem6 from '../../assets/imagem6.jpg';
import imagem5 from '../../assets/imagem5.jpg';
import imagem2 from '../../assets/imagem2.jpg';
import imagem1 from '../../assets/imagem1.jpg';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__header">Explore mais nossa bibiblioteca digital!</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Venha nos Visitar!" text="Estamos abertos de segunda a sexta, das 8h00 às 18h00." image={imagem4} />
      <Feature title="Chegou no acervo!" text="Nossas estantes recebem novidades todas as semanas. Faça sua pesquisa em nosso acervo através de jornais, periódicos, do acervo de referência (Coleção Mossoroense), literatura infantil e muito mais!" image={imagem6} />
      <Feature title="Projetos de leitura" text="A “Hora do Conto” é a atividade da biblioteca na qual são narrados e lidos oralmente contos ou histórias para grupos de crianças, com o fim de desenvolver suas aptidões para escutar, estimular sua imaginação, aguçar sua sensibilidade e despertar-lhe o desejo de ler." image={imagem5} />
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Participe da programação cultural de Mossoró" text="No período natalino a cidade de Mossoró se abrilhanta com luzes, pinheiros e arcos do natal, recebendo também, a chegada do Papai Noel com seu trenó e suas renas." image={imagem2} />
      <Feature title="Conhece as instituições que funcionam dentro da Biblioteca Pública?" text="Fundada em 06 de abril de 1995, a Fundação Vingt-un Rosado nasceu com objetivos claros que seriam de manter a Coleção Mossoroense, estabelecendo as diretrizes de sua produção editorial..." image={imagem1} />
      <Feature title="A biblioteca está ON!" text="O nosso site também pode ser acessado tanto pelo notebook, computador quanto nos smartphones e tablets." image="https://spleituras.org.br/galeria/bspequipamentos-imagem-1006-biblion-bsp-h.jpg" />
    </div>
  </div>
);

export default WhatGPT3;
