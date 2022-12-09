import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiInstagramFill } from 'react-icons/ri';
import './headerNavbar.css';

const HeaderNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="library__headerNavbar">
      <div className="library__headerNavbar-links">
        <div className="library__headerNavbar-links_logo">
          <p><a href="https://www.prefeiturademossoro.com.br/#portal" target="_blank" rel="noreferrer">prefeiturademossoro.com.br</a></p>
        </div>
      </div>
      <div className="library__headerNavbar-links_social">
        <a href="https://www.instagram.com/bibliotecaneypontes/?igshid=MDM4ZDc5MmU=" target="_blank" rel="noreferrer" aria-label="Instagram"><RiInstagramFill color="var(--color-default)" size={27} /></a>
        {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><RiFacebookBoxFill color="var(--color-default)" size={27} /></a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><RiTwitterFill color="var(--color-default)" size={27} /></a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Youtube"><RiYoutubeFill color="var(--color-default)" size={27} /></a>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Linkedin"><RiLinkedinBoxFill color="var(--color-default)" size={27} /></a> */}
      </div>
      <div className="library__gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="var(--color-default)" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="var(--color-default)" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="library__gpt3__navbar-menu_container scale-up-center">
          <div>
            <a href="https://www.instagram.com/bibliotecaneypontes/?igshid=MDM4ZDc5MmU=" target="_blank" rel="noreferrer" aria-label="Instagram"><RiInstagramFill color="var(--color-bg)" size={27} /></a>
            {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><RiFacebookBoxFill color="var(--color-bg)" size={27} /></a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><RiTwitterFill color="var(--color-bg)" size={27} /></a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Youtube"><RiYoutubeFill color="var(--color-bg)" size={27} /></a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" aria-label="Linkedin"><RiLinkedinBoxFill color="var(--color-bg)" size={27} /></a> */}
          </div>
          <div className="library__navbar-menu_container-links">
            <p><a href="#home">Ínicio</a></p>
            <p><a href="#wlibrary">Sobre</a></p>
            <p><a href="#possibility">Serviços</a></p>
            <p><a href="#features">Catálogo</a></p>
            <p><a href="#blog">Novas Aquisições</a></p>
            <p><a href="#blog">Livros Digitais</a></p>
            <p><a href="#blog">Fale Conosco</a></p>
            <input type="buscar" placeholder="Buscar" />
            <button type="button">Buscar</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNavbar;
