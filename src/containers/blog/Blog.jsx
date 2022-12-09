import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding news__margin" id="blog">
    <div className="gpt3__blog-heading">
      <div />
      <h1 className="gradient__text">Últimas Notícias</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Domingo - 04/12/2022" text="Campanha de devolução de livros" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sexta-feira - 09/12/2022" text="Novas aquisições da biblioteca" />
        <Article imgUrl={blog03} date="Terça-feira - 06/12/2022" text="Conheça nosso Concurso Literário" />
        <Article imgUrl={blog04} date="Quarta-feira - 07/12/2022" text="Faça sua carteirinha e realize empréstimos" />
        <Article imgUrl={blog05} date="Quinta-feira - 08/12/2022" text="Dicas de Estudo" />
      </div>
    </div>
  </div>
);

export default Blog;
