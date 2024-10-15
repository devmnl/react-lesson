import React, { useState } from 'react';
import './Header.css';
import logo from './logo-m.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faReact, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" /> {/* Insere a imagem do logo */}
      </div>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* Seção de ícones sociais */}
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'} {/* Alterna entre o ícone de menu e fechar */}
      </div>
      {/* Ícones das redes sociais */}
      
    </header>
  );
};

export default Header;

