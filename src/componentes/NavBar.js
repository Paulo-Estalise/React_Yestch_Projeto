import React from 'react';
import './NavBar.css'; // Importe o arquivo de estilo CSS

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item">Yestch</span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Categoria 1</a>
          <a className="navbar-item">Categoria 2</a>
          <a className="navbar-item">Categoria 3</a>
          {/* Adicione mais categorias conforme necessário */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
