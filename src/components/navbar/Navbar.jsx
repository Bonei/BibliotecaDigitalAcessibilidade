import React from 'react';
import logo from '../../assets/livro.jpg';
import prefeitura from '../../assets/logo-prefeitura-mossoro-colorida.png';
import { MenuItemsNav } from './index';
import menuItems from './menuItems';
import './navbar.css';

const Navbar = () => {
  const depthLevel = 0;
  return (
    <nav className="library__navbar">
      <div className="library__navbar-links_logo">
        <img src={logo} />
        <p><a href="#home">BIBLIOTECA PÚBLICA MUNICIPAL NEY PONTES DUARTE</a></p>
        <img src={prefeitura} />
      </div>
      <div className="library__navbar-links">
        <div className="library__navbar-links_container">
          <ul className="menus">
            {menuItems.map((menu, index) => (
              <MenuItemsNav items={menu} key={index} depthLevel={depthLevel} />
            ))}
            <li><input type="buscar" placeholder="Buscar" /></li>
            <li><button type="button">Buscar</button></li>
          </ul>
          {/* <p><a href="#home">Ínicio</a></p>
          <p><a href="#wlibrary">Sobre</a></p>
          <p><a href="#possibility">Serviços</a></p>
          <p><a href="#features">Catálogo</a></p>
          <p><a href="#blog">Novas Aquisições</a></p>
          <p><a href="#blog">Livros Digitais</a></p>
          <p><a href="#blog">Fale Conosco</a></p>
          <input type="buscar" placeholder="Buscar" />
          <button type="button">Buscar</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
