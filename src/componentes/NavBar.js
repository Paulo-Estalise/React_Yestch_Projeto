import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand">Yestch</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">Categoria 1</li>
        <li className="nav-item">Categoria 2</li>
        <li className="nav-item">Categoria 3</li>
        {/* Adicione mais categorias conforme necessário */}
      </ul>
    </nav>
  );
}

export default NavBar;
