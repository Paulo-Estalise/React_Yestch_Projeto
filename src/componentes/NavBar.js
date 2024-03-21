// src/components/NavBar.js

import React from 'react';
import './NavBar.css'; // Importe o arquivo CSS aqui

const NavBar = () => {
  return (
    <nav>
      <div className="brand">Nome da Loja</div> {/* Adicione a div com a classe "brand" */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
