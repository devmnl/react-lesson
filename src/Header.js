import React, { useState } from 'react';
import './Header.css';
import logo from './logo-m.png';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    // Função para fechar o menu quando um link for clicado
    const closeMenu = () => {
      setMenuOpen(false);
    };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" /> {/* Insere a imagem do logo */}
      </div>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

          </ul>
      </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'} {/* Alterna entre o ícone de menu e fechar */}
      </div>
      {/* Ícones das redes sociais */}
      
    </header>
  );
};

export default Header;

